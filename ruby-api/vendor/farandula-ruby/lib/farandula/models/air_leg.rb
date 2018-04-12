module Farandula
  class AirLeg
      attr_accessor :id
      attr_accessor :departure_airport_code
      attr_accessor :departing_date
      attr_accessor :arrival_airport_code
      attr_accessor :arrival_date
      attr_accessor :segments
      attr_accessor :price

      def initialize(
        id                      = nil,
        departure_airport_code  = nil,
        departing_date          = nil,
        arrival_airport_code    = nil,
        arrival_date            = nil,
        segments                = [],
        price                   = nil
      )

        @id                     = id
        @departure_airport_code = departure_airport_code
        @departing_date         = departing_date
        @arrival_airport_code   = arrival_airport_code
        @arrival_date           = arrival_date
        @segments               = segments
        @price                  = price

      end

      def to_s
        "id #{id}, " \
        "departure_airport_code #{departure_airport_code}, " \
        "departing_date #{departing_date}, " \
        "arrival_airport_code #{arrival_airport_code}, " \
        "arrival_date #{arrival_date}, " \
        "segments #{segments.to_s}, " \
        "price #{price}."
      end
  end

end
