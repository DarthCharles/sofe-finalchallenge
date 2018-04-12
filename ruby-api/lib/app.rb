$LOAD_PATH.unshift('.')

require 'bundler/setup'

require 'sinatra'
require 'net/http'
require 'active_support/all'
require 'json'
require 'jbuilder'
require 'farandula'
require 'date'
require 'pry'
require_relative 'helpers/assets'
require_relative 'helpers/builders'
require_relative '../lib/helpers/flight_helper'
require_relative '../env'

include FarandulaSample

get '/airports' do
  builder = Builders.new
  airport_params = format_airport_params
  query = airport_params[:pattern]
  airports = builder.hashCities.select do |value|
    (value.name.downcase.include? query.to_s)
  end
  airports.to_json
end

get '/flights' do
  flight_params = format_flight_params
  builder = Farandula::SearchForm::Builder.new
  builder
      .type(flight_params[:type])
      .with_cabin_class(flight_params[:cabin])
      .limited_results_to(flight_params[:limit])
      .from(flight_params[:departingAirportCodes])
      .departing_at(flight_params[:departingDates])
      .to(flight_params[:arrivalAirportCodes])
      .returning_at(flight_params[:returnDates])
  search_form = builder.build!
  create_passengers builder
  manager = create_manager
  Itinerary = ItineraryJSONHelper.new
  Itinerary.get_flight_itinerary_from_itineraries( { itinerary_list: manager.get_avail(search_form), type: search_form.type }).to_json
end

private

def create_manager
  Farandula::Factory.build_flight_manager(:sabre, {
      client_id: ENV['SABRE_CLIENT_ID'],
      client_secret: ENV['SABRE_CLIENT_SECRET']
  })
end

def parse_dates(departing_dates)
  departing_dates_array = departing_dates.each.map do
  |departing_date|
    Date.parse(departing_date)
  end
  departing_dates_array
end

def parse_cabin_type cabin
  if CABIN_TYPES.include? cabin
    cabin_type = cabin.to_sym
  else
    cabin_type = :economy
  end
  cabin_type
end

def format_flight_params
  flight_params = {}
  params.each do |k, v|
    key = k.to_sym
    flight_params[key] = v.downcase
    if k == "departingAirportCodes" || k == "arrivalAirportCodes"
      flight_params[key] = v.upcase.split(',')
    end
    if k == "type"
      flight_params[key] = parse_flight_type(v)
    end
    if k == "returnDates" || k == "departingDates"
      flight_params[key] = parse_dates(v.split(','))
    end
  end
  flight_params[:cabin] = parse_cabin_type(params['cabin'])
  flight_params[:departingAirportCodes] = ['LAX']
  flight_params
end

def parse_flight_type(type)
  if FLIGHT_TYPES.include? type.downcase
    if type.eql? 'multi'
      type_enum = :openjaw
    else
      type_enum = type.to_sym.downcase
    end
  else
    type_enum = :oneway
  end
  type_enum
end

def format_airport_params
  airport_params = {}
  params.each { |k, v| airport_params[k.to_sym] = v.downcase }
  airport_params
end

def create_passengers builder
  #TODO Refactor the next method generating a Passenger instance for each value sent on passenger params, age must be specified for each type of passenger with the constants variable:
  # PASSENGER_TYPES = { 'children' => 4, 'infants' => 2, 'infantsOnSeat' => 2, 'adults' => 18 }
  builder.with_passenger(
    passenger = Farandula::Passenger.new(:adults, 18)
  )
end