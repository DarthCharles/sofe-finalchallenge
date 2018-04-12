require 'test_helper'
require 'minitest/autorun'
require 'farandula/flight_managers/amadeus/request'

class Farandula::AmadeusIntegrationTest < Minitest::Test

  include Farandula
  include Farandula::FlightManagers

  def test_round_way_trip

    from          = ['CUU']
    to            = ['SFO']
    departing_at  = [DateTime.now + 1]
    returning_at  = [DateTime.now >> 1]
    limit = 10

    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder
                      .from(from)
                      .to(to)
                      .departing_at(departing_at  )
                      .returning_at(returning_at )
                      .type(:roundtrip)
                      .with_cabin_class(:economy)
                      .with_passenger( passenger )
                      .limited_results_to( limit )
                      .build!

    manager = Factory.build_flight_manager(:amadeus, {})
    itineraries = manager.get_avail(search_form)

    assert itineraries.size <= limit
    #this one checks round-trip
    assert itineraries[0].airlegs.size == 2
    assert_equal( itineraries[0].airlegs[0].departure_airport_code.downcase , 'cuu' )
    assert_equal( itineraries[0].airlegs[1].departure_airport_code.downcase , 'sfo' )

  end

  def test_one_way_trip

    from          = ['DFW']
    to            = ['CDG']
    departing_at  = [DateTime.now + 1]
    returning_at  = [DateTime.now >> 1]
    limit = 50

    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder
                      .from(from)
                      .to(to)
                      .departing_at(departing_at  )
                      .returning_at(returning_at )
                      .type(:oneway)
                      .with_cabin_class(:economy)
                      .with_passenger( passenger )
                      .limited_results_to( limit )
                      .build!

    manager = Factory.build_flight_manager(:amadeus, {})
    itineraries = manager.get_avail(search_form)

    assert itineraries.size <= limit
    #this one checks round-trip
    assert itineraries[0].airlegs.size == 1
    assert_equal( itineraries[0].airlegs[0].departure_airport_code.downcase , from[0].downcase )

  end


  def test_open_jaw

    from          = ['DFW','MEX','HMO']
    to            = ['CDG','LAS','LAX']
    departing_at  = [DateTime.now + 1, DateTime.now + 11, DateTime.now + 21 ]
    returning_at  = [DateTime.now + 10, DateTime.now + 20, DateTime.now >>1 ]
    limit = 50

    passenger   = Passenger.new(:adults, 25)
    builder     = SearchForm::Builder.new
    search_form = builder
                      .from(from)
                      .to(to)
                      .departing_at(departing_at  )
                      .returning_at(returning_at )
                      .type(:openjaw)
                      .with_cabin_class(:economy)
                      .with_passenger( passenger )
                      .limited_results_to( limit )
                      .build!

    manager = Factory.build_flight_manager(:amadeus, {})
    itineraries = manager.get_avail(search_form)

    assert itineraries.size <= limit
    #this one checks openjaw
    assert itineraries[0].airlegs.size == from.size
    assert_equal( itineraries[0].airlegs[0].departure_airport_code.downcase , from[0].downcase )

  end

  def test_1
    assert 1 == 1
  end
end
