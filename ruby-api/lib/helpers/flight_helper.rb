require_relative '../../lib/models/flights'
require_relative '../../lib/models/itinerary_fares'
require_relative '../../lib/models/airport'
require_relative '../../lib/models/flight_segment'
require_relative '../../lib/models/price'
require_relative '../../lib/helpers/builders'
require_relative '../../constants'
require 'securerandom'

module FarandulaSample

  class ItineraryJSONHelper

    attr_accessor :builder

    def initialize
      @builder = Builders.new
    end

    def get_flight_itinerary_from_itineraries(args)
      itinerary_list = args[:itinerary_list].sort_by! { |i| i.price.base_price.amount }
      itinerary_list.map do |itinerary|
        itinerary_fares = parse_fares_to_itinerary_fares(itinerary.price)
        flight_list     = get_flights_from_itinerary({ itinerary: itinerary })
        FlightItinerary.new({
                              key:     SecureRandom.uuid,
                              type:    args[:type],
                              flights: flight_list,
                              fares:   itinerary_fares })
      end
    end

    private

    def parse_fares_to_itinerary_fares(fares)
      itinerary_fares = ItineraryFares.new
      if fares.base_price.nil?
        itinerary_fares
      else
        %w[base_price taxes_price total_price].each do |price_name|
          fare  = fares.public_send(price_name)
          price = Price.new(amount: fare.amount, currency_code: fare.currency_code)
          itinerary_fares.public_send("#{price_name.camelize(:lower)}=", price)
        end
      end
    end

    def get_flights_from_itinerary(args)
      sorted_airlegs = args[:itinerary].airlegs.sort_by { |a| a.segments.length }
      sorted_airlegs.map do |airleg|
        parse_airleg_to_flight(airleg)
      end
    end

    def parse_airleg_to_flight(airleg)
      flight_segment_list = airleg.segments.map { |segment| parse_segment_to_flight_segment(segment) }
      first_segment       = flight_segment_list.first
      last_segment        = flight_segment_list.last
      args                = {
        departing_date:      airleg.departing_date,
        arrival_date:        airleg.arrival_date,
        flight_segment_list: flight_segment_list,
        first_segment:       first_segment,
        last_segment:        last_segment,
        departure_airport:   builder.hashCities.find { |value| value.iata.include? first_segment.departureAirport.iata.upcase },
        arrival_airport:     builder.hashCities.find { |value| value.iata.include? last_segment.arrivalAirport.iata.upcase }
      }
      create_new_flight args
    end


    def parse_segment_to_flight_segment(segment)
      args              = {}
      departure_segment = builder.hashCities.find do |value|
        value.iata.include? segment.departure_airport_code.upcase
      end

      arrival_segment = builder.hashCities.find do |value|
        value.iata.include? segment.arrival_airport_code.upcase
      end

      args[:departure_airport] = create_new_airport departure_segment
      args[:arrival_airport]   = create_new_airport arrival_segment
      args[:seats] = segment.seats_available.map { |cabin_type| cabin_type.classCabin }.to_set

      create_new_flight_segment segment, args
    end

    def create_new_flight args
      Flight.new({
                   departure_airport: args[:departure_airport],
                   departure_date:    args[:departing_date],
                   arrival_airport:   args[:arrival_airport],
                   arrival_date:      args[:arrival_date],
                   segments:          args[:flight_segment_list] })
    end

    def create_new_airport segment
      Airport.new({
                    airport_name: segment.name,
                    city:         segment.city,
                    country:      segment.country,
                    iata:         segment.iata })
    end

    def create_new_flight_segment segment, args
      FlightSegment.new(args[:departure_airport],
                          args[:arrival_airport],
                          segment.departure_date,
                          segment.arrival_date,
                          segment.duration,
                          segment.marketing_airline_name,
                          segment.operating_airline_name,
                          segment.airplane_data,
                          args[:seats])
    end

  end

end
