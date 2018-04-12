require 'test_helper'
require 'file_helper'
require 'string_helper'
require 'minitest/autorun'
require 'farandula/flight_managers/amadeus/request'

class Farandula::AmadeusRequestTest < Minitest::Test

  include Farandula
  include Farandula::FlightManagers

  def setup
    @request = Amadeus::Request.new
  end

  def test_build_request_for_builds_valid_url

    from          = []
    to            = []
    departing_at  = []

    from << 'CUU'
    to << 'SFO'
    departing_at << (DateTime.now >> 1)

    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder
                      .from( from )
                      .to( to )
                      .departing_at( departing_at)
                      .type(:oneway)
                      .with_cabin_class( :economy)
                      .with_passenger( passenger )
                      .limited_results_to( 2 )
                      .build!(false)

    expectedURL = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?" \
        "apikey=R6gZSs2rk3s39GPUWG3IFubpEGAvUVUA" \
        "&travel_class=ECONOMY&origin=CUU" \
        "&destination=SFO" \
        "&departure_date=#{ (Date.today >> 1) }" \
        "&adults=1" \
        "&number_of_results=2"

    result = @request.build_target_url_from_search!( search_form, "R6gZSs2rk3s39GPUWG3IFubpEGAvUVUA" )

    assert_equal( expectedURL.downcase , result[0].downcase )

  end

end
