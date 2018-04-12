module Farandula

  class Segment

    attr_accessor :key, :operating_airline_code, :operating_airline_name, :operating_flight_number,
                  :marketing_airline_code, :marketing_airline_name, :marketing_flight_number,
                  :departure_airport_code, :departure_terminal, :departure_date,
                  :arrival_airport_code, :arrival_terminal, :arrival_date,
                  :airplane_data, :duration, :seats_available

    def initialize(
        key                     = nil,
        operating_airline_code  = nil,
        operating_airline_name  = nil,
        operating_flight_number = nil,
        marketing_airline_code  = nil,
        marketing_airline_name  = nil,
        marketing_flight_number = nil,
        departure_airport_code  = nil,
        departure_terminal      = nil,
        departure_date          = nil,
        arrival_airport_code    = nil,
        arrival_terminal        = nil,
        arrival_date            = nil,
        airplane_data           = nil,
        duration                = nil,
        seats_available         = []
    )

      @key                      = key
      @operating_airline_code   = operating_airline_code
      @operating_airline_name   = operating_airline_name
      @operating_flight_number  = operating_flight_number
      @marketing_airline_code   = marketing_airline_code
      @marketing_airline_name   = marketing_airline_name
      @marketing_flight_number  = marketing_flight_number
      @departure_airport_code   = departure_airport_code
      @departure_terminal       = departure_terminal
      @departure_date           = departure_date
      @arrival_airport_code     = arrival_airport_code
      @arrival_terminal         = arrival_terminal
      @arrival_date             = arrival_date
      @airplane_data            = airplane_data
      @duration                 = duration
      @seats_available          = seats_available

    end

    def to_s
      "Key #{key}, " \
      "operating_airline_code #{operating_airline_code}, " \
      "operating_flight_name #{operating_airline_name}, " \
      "operating_flight_number #{operating_flight_number}, " \
      "marketing_airline_code #{marketing_airline_code}, " \
      "marketing_airline_name #{marketing_airline_name}, " \
      "marketing_flight_number #{marketing_flight_number}, " \
      "departure_airport_code #{departure_airport_code}, " \
      "departure_terminal #{departure_terminal}, " \
      "departure_date #{departure_date}, " \
      "arrival_airport_code #{arrival_airport_code}, " \
      "arrival_terminal #{arrival_terminal}, " \
      "arrival_date #{arrival_date}, " \
      "airplane_data #{airplane_data}, " \
      "duration #{duration} " \
      "seats_available #{seats_available.to_s}. "
    end


  end

end