module FarandulaSample

  class City

    attr_accessor :name, :city, :country, :iata

    def initialize(args = {})
      @name     = args[:name]
      @city     = args[:city]
      @country  = args[:country]
      @iata     = args[:iata]
    end
  end
end
