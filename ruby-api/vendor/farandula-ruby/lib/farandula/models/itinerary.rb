module Farandula
  class Itinerary

    attr_accessor :id
    attr_accessor :airlegs
    attr_accessor :price

    def initialize(id = nil, air_legs = [], price = nil)
      @id       = id
      @airlegs = air_legs
      @price    = price
    end

    def to_s
      "id #{id}, " \
      "air_legs #{airlegs.to_s}, " \
      "price #{price}."
    end

  end
end
