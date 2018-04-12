module Farandula
  
  class Fares


    attr_accessor :base_price,:taxes_price,:total_price,:price_per_adult,:tax_per_adult,
                  :price_per_child,:tax_per_child,:price_per_infant,:tax_per_infant

    def initialize(
        base_price        = nil,
        taxes_price       = nil,
        total_price       = nil,
        price_per_adult   = nil,
        tax_per_adult     = nil,
        price_per_child   = nil,
        tax_per_child     = nil,
        price_per_infant  = nil,
        tax_per_infant    = nil
    )
      @base_price       = base_price
      @taxes_price      = taxes_price
      @total_price      = total_price
      @price_per_adult  = price_per_adult
      @tax_per_adult    = tax_per_adult
      @price_per_child  = price_per_child
      @tax_per_child    = tax_per_child
      @price_per_infant = price_per_infant
      @tax_per_infant   = tax_per_infant

    end 

    def to_s
      "Fares { basePrice= #{base_price} }"
    end

  end  

end
