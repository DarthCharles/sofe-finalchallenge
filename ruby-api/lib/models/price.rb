module FarandulaSample
  class Price

    attr_accessor :amount, :currencyCode

    def initialize( args = {} )
      @amount       = args[:amount]
      @currencyCode = args[:curency_code] || default_currency
    end

    private

      def default_currency
        'USD'
      end

  end
end
