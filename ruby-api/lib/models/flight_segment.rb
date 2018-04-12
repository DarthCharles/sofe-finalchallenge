module FarandulaSample
  class FlightSegment

    attr_reader  :departureAirport
    attr_writer  :arrivalAirport
    attr_writer  :departureDate
    attr_reader  :arrivalDate
    attr_reader  :duration
    attr_writer  :airLineMarketingName
    attr_writer  :airLineOperationName
    attr_reader  :airplaneData
    attr_reader  :cabinTypes

    def initialize (departureAirport =nil, arrivalAirport=nil, departureDate=nil, arrivalDate =nil, duration=nil, airLineMarketingName=nil, airLineOperationName=nil, airplaneData=nil, cabinTypes=[])
      @departureAirport     = departureAirport
      @arrivalAirport       = arrivalAirport
      @departureDate        = departureDate
      @arrivalDate          = arrivalDate
      @duration             = duration
      @airLineMarketingName = airLineMarketingName
      @airLineOperationName = airLineOperationName
      @airplaneData         = airplaneData
      @cabinTypes           = cabinTypes
    end

    def arrivalDate=(value)
      @arrivalDate = value
    end

    def duration=(value)
      @duration = value
    end

    def arrivalAirport
      @arrivalAirport
    end

    def airLineOperationName
      @airLineOperationName
    end

    def airplaneData=(value)
      @airplaneData = value
    end

    def cabinTypes=(value)
      @cabinTypes = value
    end

    def departureDate
      @departureDate
    end

    def airLineMarketingName
      @airLineMarketingName
    end

    def departureAirport=(value)
      @departureAirport = value
    end
  end
end