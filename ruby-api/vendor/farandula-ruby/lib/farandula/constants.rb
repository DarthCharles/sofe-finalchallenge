module Farandula

  module FlightType
    ONEWAY    = :oneway
    ROUNDTRIP = :roundtrip
    OPENJAW  = :openjaw

    TYPES = [ONEWAY, ROUNDTRIP, OPENJAW]
  end


  module CabinClassType

    ECONOMY         = :economy
    PREMIUM_ECONOMY = :premium_economy
    FIRST           = :first
    BUSINESS        = :business
    ECONOMYCOACH    = :economycoach
    OTHER           = :other
    TYPES           = [ECONOMY, PREMIUM_ECONOMY, FIRST, BUSINESS ,ECONOMYCOACH, OTHER]
  end

  module PassengerType

    ADULTS        = :adults
    CHILDREN      = :children
    INFANTS       = :infants
    INFANTSONSEAT = :infantsonseat

    TYPES = [ADULTS, CHILDREN, INFANTS, INFANTSONSEAT]

  end

end