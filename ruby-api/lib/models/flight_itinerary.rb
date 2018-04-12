module FarandulaSample

  class FlightItinerary

    attr_accessor :key, :type, :flights, :fares

    def initialize (args = {})
      @key      = args[:key]
      @type     = args[:type]
      @airlegs  = args[:flights]
      @fares    = args[:fares]
    end

  end
end
