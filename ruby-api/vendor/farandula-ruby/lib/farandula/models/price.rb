module Farandula
  
  class Price

    attr_accessor :amount
    attr_accessor :currency_code

    def initialize(
        amount        = nil,
        currency_code = nil
    )
      @amount        = amount
      @currency_code = currency_code
    end 

    def to_s
      "amount #{amount}, currency code #{currency_code}."
    end

  end  

end
