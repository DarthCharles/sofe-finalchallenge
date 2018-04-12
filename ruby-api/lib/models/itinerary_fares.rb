module FarandulaSample

  class ItineraryFares

    attr_accessor :basePrice, :taxesPrice, :totalPrice

    def initialize (args = {})
      @basePrice   = args[:basePrice]
      @taxesPrice  = args[:taxesPrice]
      @totalPrice  = args[:totalPrice]
    end

  end
end
