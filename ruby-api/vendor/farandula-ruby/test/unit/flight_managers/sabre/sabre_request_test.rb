require 'test_helper'
require 'file_helper'
require 'string_helper'
require 'minitest/autorun'

class Farandula::SabreRequestTest < Minitest::Test

  include Farandula
  include Farandula::FlightManagers

  def setup
    @request = Sabre::Request.new
    @json    = Jbuilder.new
  end

  def test_build_flight_info

    from          = ['CUU']
    to            = ['SFO']
    departing_at  = [DateTime.new(2017,04,24)]

    @request.build_flight_info(@json, 1, from[0], departing_at[0], to[0])
    expected = FileHelper.load_asset('sabre/flight-info.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_header_builds_a_valid_json
    @request.build_header(@json)
    expected = FileHelper.load_asset('sabre/request-header.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_travel_preferences
    @request.build_travel_preferences(@json, :business)
    expected = FileHelper.load_asset('sabre/travel-preferences.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_travel_info_summary
    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder.with_passenger(passenger).build!(false)

    @request.build_travel_info_summary(@json, search_form)
    expected = FileHelper.load_asset('sabre/travel-info-summary.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_travel_info_summary_for_multiple_passengers
    passenger1  = Passenger.new(:adults, 25)
    passenger2  = Passenger.new(:adults, 27)
    passenger3  = Passenger.new(:children, 10)
    passenger4  = Passenger.new(:infants, 1)
    passenger5  = Passenger.new(:infantsonseat, 3)
    builder     = SearchForm::Builder.new
    search_form = builder
                    .with_passenger(passenger1)
                    .with_passenger(passenger2)
                    .with_passenger(passenger3)
                    .with_passenger(passenger4)
                    .with_passenger(passenger5)
                    .build!(false)

    @request.build_travel_info_summary(@json, search_form)
    expected = FileHelper.load_asset('sabre/travel-info-summary-multiple-passengers.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_tpa_extensions_builds_valid_json
    @request.build_tpa_extensions(@json)
    expected = FileHelper.load_asset('sabre/tpa-extensions.json')
    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(@json.target!)
    )
  end

  def test_build_request_for

    from          = ['CUU']
    to            = ['SFO']
    departing_at  = [DateTime.new(2017,12,24)]
    returning_at  = [DateTime.new(2017,12,30)]

    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder
                    .from(from)
                    .to(to)
                    .departing_at( departing_at )
                    .returning_at( returning_at )
                    .type(:roundtrip)
                    .with_cabin_class('Y')
                    .with_passenger(passenger)
                    .build!(false)

    expected    = FileHelper.load_asset('sabre/request.json')
    actual      = @request.build_request_for!(search_form)

    puts "expected #{expected}"
    puts "actual #{actual}"

    assert_equal(
      StringHelper.no_space(expected),
      StringHelper.no_space(actual)
    )

  end


end
