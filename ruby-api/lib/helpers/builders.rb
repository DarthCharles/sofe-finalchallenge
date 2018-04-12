require_relative '../../lib/models/city'

module FarandulaSample

  class Builders

    attr_reader :hashCities

    def initialize
      file        = FarandulaSample::Assets.load_file('airports.json')
      parsed      = JSON.parse(file)
      @hashCities = parsed["airports"].map { |airport| build_city(airport) }
    end

    def build_city(airport)
      City.new({ name:    airport["name"].titleize,
                 city:    airport["city"].titleize,
                 country: airport["country"].downcase,
                 iata:    airport["iata"].upcase })
    end
  end
end
