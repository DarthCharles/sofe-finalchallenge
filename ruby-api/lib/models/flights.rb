require "date"

module FarandulaSample

  class Flight

    attr_accessor :departureAirport, :departureDate, :arrivalAirport, :arrivalDate, :segments

    def initialize (args = {})
      @departureAirport  = args[:departure_airport]
      @departureDate     = args[:departure_date]
      @arrivalAirport    = args[:arrival_airport]
      @arrivalDate       = args[:arrival_date]
      @segments          = args[:segments]
    end

  end
end
