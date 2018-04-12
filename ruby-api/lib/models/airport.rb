module FarandulaSample

  class Airport

    attr_accessor :airportName, :city, :country, :iata

    def initialize (args = {})
      @airportName  = args[:airport_name]
      @city         = args[:city]
      @country      = args[:country]
      @iata         = args[:iata]
    end

  end
end
