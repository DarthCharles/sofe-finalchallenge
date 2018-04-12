require 'farandula/constants'
require 'farandula/flight_managers/flight_manager'
require 'farandula/utils/logger_utils'
require 'farandula/models/itinerary'
require 'farandula/models/air_leg'
require 'farandula/models/segment'
require 'farandula/models/seat'
require 'farandula/models/fares'
require 'farandula/models/price'
require 'farandula/utils/exceptions_helper'
require 'farandula/utils/logger_utils'
require 'rest-client'
require 'time'
require 'logger'

module Farandula
  module FlightManagers
    module Sabre

      class SabreFlightManager < FlightManager

        def initialize(creds)
          @access_manager = AccessManager.new(creds[:client_id], creds[:client_secret] )
          # maps
          @airline_code_map   = YAML.load_file(File.dirname(__FILE__) + '/../../assets/amadeus/' + "airlinesCode.yml")
          @airline_cabin_map  = YAML.load_file(File.dirname(__FILE__) + '/../../assets/sabre/' + "cabins.yml")

          @logger             = Logger.new File.new('farandula-ruby.log', File::WRONLY | File::APPEND | File::CREAT)
          @logger.level       = Logger::DEBUG

        end

        def get_avail(search_form)

          build_itineraries( get_response( search_form )  )

        end


        private
        def get_response( search_form )
          headers = {
              content_type: :json,
              accept: :json,
              Authorization: @access_manager.build_auth_token
          }

          url = 'https://api.test.sabre.com/v3.1.0/shop/flights?mode=live&enabletagging=true&limit=50&offset=1'
          if search_form.offset
            url = "https://api.test.sabre.com/v3.1.0/shop/flights?mode=live&enabletagging=true&limit=#{search_form.offset}&offset=1"
          end

          request = Sabre::Request.new
          request_json = request.build_request_for!(search_form)
          @logger.info ("Sabre Request: #{request_json}.\n")
          printf "Sabre Request: #{request_json}\n."

          RestClient.post(
              url,
              request_json,
              headers
          )

        end

        def build_credentials(client_id, client_secret)
          encoded_id     = Base64.strict_encode64(client_id)
          encoded_secret = Base64.strict_encode64(client_secret)
          encoded        = Base64.strict_encode64("#{encoded_id}:#{encoded_secret}")
          "Basic #{encoded}"
        end

        def build_itineraries( response  )

          @logger.info ("Sabre Response: #{ Farandula::Utils::LoggerUtils.get_pretty_json response}.\n")

          parsed = JSON.parse( response )

          root = parsed['OTA_AirLowFareSearchRS']['PricedItineraries']

          root['PricedItinerary'].each.map do |itin|

            legs = build_air_legs(itin )

            air_itinerary_pricing_info = itin['AirItineraryPricingInfo']

            if air_itinerary_pricing_info.size > 1
              msg = 'We don\'t support multiple AirPricingInfo'
              Farandula::Utils::ExceptionsHelper.handle_exceptions(
                  ActionUnsupported(msg), msg )
            end

            set_seats( air_itinerary_pricing_info, legs )

            itineray_result = Farandula::Itinerary.new

            itineray_result.airlegs = legs

            itineray_result.price = extract_fares_info( air_itinerary_pricing_info );

            itineray_result

          end

        end

        def build_air_legs( json_itinerary )

          originDestinationOption = json_itinerary['AirItinerary']['OriginDestinationOptions']['OriginDestinationOption']

          airlegs = []
          originDestinationOption.each_with_index.map do|element, index|

            segments = element['FlightSegment'].each_with_index.map {|segment, index_seg| build_segment(segment, index_seg)}

            air_leg                         = Farandula::AirLeg.new
            air_leg.id                      = index
            air_leg.departure_airport_code  = segments[0].departure_airport_code
            air_leg.departing_date          = segments[0].departure_date
            air_leg.arrival_airport_code    = segments[segments.size - 1].arrival_airport_code
            air_leg.arrival_date            = segments[segments.size - 1].arrival_date
            air_leg.segments                = segments

            airlegs << air_leg

          end

          airlegs

        end

        def build_segment(json_segment, index)

          equipment_data          = json_segment['Equipment'][0]
          operative_airline_data  = json_segment['OperatingAirline']
          marketing_airline_data  = json_segment['MarketingAirline']

          # departure
          departure_airport_data  = json_segment['DepartureAirport']

          # arrival
          arrival_airport_data    = json_segment['ArrivalAirport']

          # airleg data
          segment                         = Farandula::Segment.new
          segment.key                     = index
          segment.operating_airline_code  = operative_airline_data['Code']
          segment.operating_airline_name  = @airline_code_map[segment.operating_airline_code]
          segment.operating_flight_number = operative_airline_data['FlightNumber']

          segment.marketing_airline_code  = marketing_airline_data['Code']
          segment.marketing_airline_name  = @airline_code_map[segment.marketing_airline_code]

          segment.airplane_data           = equipment_data['AirEquipType']

          segment.departure_airport_code  = departure_airport_data['LocationCode']
          segment.departure_terminal      = departure_airport_data['TerminalID']
          segment.departure_date          = format_date(Time.parse (json_segment['DepartureDateTime']) )

          segment.arrival_airport_code    = arrival_airport_data['LocationCode']
          segment.arrival_terminal        = arrival_airport_data['TerminalID']
          segment.arrival_date            = format_date( Time.parse (json_segment['ArrivalDateTime']) )

          segment.duration                = json_segment['ElapsedTime']

          segment

        end

        def format_date(date)
          date.strftime('%Y-%m-%dT%H:%M:%S.%L%z')
        end

        def extract_cabins_info ( itinerary )

          itinerary.each_with_index.map do  | it, index|
            fare_info =  it['FareInfos']['FareInfo']

            fare_info.each.map do| fare |
              fare['TPA_Extensions']
            end

          end

        end

        def set_seats( itineray , legs  )

          cabins_info =  extract_cabins_info( itineray )

          legs.each do | leg |

            leg.segments.each_with_index do | segment , segment_index |
              cabin_by_segment        = cabins_info[0][segment_index]
              num_of_seats            = cabin_by_segment['SeatsRemaining']['Number']
              cabin_value             = cabin_by_segment['Cabin']['Cabin']
              cabin_class_type        = @airline_cabin_map[cabin_value]? @airline_cabin_map[cabin_value]: "Other"
              seats                   = num_of_seats.times.map { Farandula::Seat.new( cabin_class_type, "")  }
              segment.seats_available = seats
            end

          end

        end

        def extract_fares_info( itinerary )

          fares = Farandula::Fares.new

          fares.base_price = Farandula::Price.new( itinerary[0]['ItinTotalFare']['BaseFare']['Amount'],
                                                   itinerary[0]['ItinTotalFare']['BaseFare']['CurrencyCode'] )

          fares.taxes_price = Farandula::Price.new( itinerary[0]['ItinTotalFare']['Taxes']['Tax'][0]['Amount'],
                                                    itinerary[0]['ItinTotalFare']['Taxes']['Tax'][0]['CurrencyCode'] )
          fares.total_price = Farandula::Price.new( itinerary[0]['ItinTotalFare']['TotalFare']['Amount'],
                                                    itinerary[0]['ItinTotalFare']['TotalFare']['CurrencyCode'] )
          fares
        end

        #private ends



      end #ends sabreflightmanager
    end #ends Sabre
  end #ends FlightManagers
end # ends Farandula
