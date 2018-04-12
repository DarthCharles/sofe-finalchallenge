require_relative './flight_managers/sabre/sabre_flight_manager.rb'
require_relative './flight_managers/amadeus/amadeus_flight_manager.rb'

module Farandula
  module Factory

    include FlightManagers::Sabre
    include FlightManagers::Amadeus

    def self.build_flight_manager(service, credentials) 

      case service
      when :sabre 
        SabreFlightManager.new(credentials)
      when :amadeus
        AmadeusFlightManager.new( "R6gZSs2rk3s39GPUWG3IFubpEGAvUVUA" )
      else 
        raise FlightManagerNotImplementedError.new
      end

    end

  end 
end

