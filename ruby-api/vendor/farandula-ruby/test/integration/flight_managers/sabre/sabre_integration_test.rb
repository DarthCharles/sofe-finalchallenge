module Farandula

  class Farandula::SabreIntegrationTest < Minitest::Test

    include Farandula
    include Farandula::FlightManagers

    def test_one_way

      from = ['DFW']
      to = ['CDG']
      departing_at = [DateTime.now + 1]
      limit = 2

      passenger = Passenger.new(:adults, 25)
      builder = SearchForm::Builder.new
      search_form = builder
                        .from(from)
                        .to(to)
                        .departing_at(departing_at)
                        .type(:oneway)
                        .with_cabin_class(:economy)
                        .with_passenger(passenger)
                        .limited_results_to(limit)
                        .build!

      manager = Factory.build_flight_manager(:sabre, {
            client_id: 'V1:zej6hju9ltib108l:DEVCENTER:EXT',
            client_secret: 'wLPi0Sy2'
          }
      )

      itineraries = manager.get_avail(search_form)

      assert itineraries.size <= limit
      assert_equal itineraries[0].airlegs[0].departure_airport_code, from[0]
      assert_equal itineraries[0].airlegs[0].arrival_airport_code, to[0]
      assert_equal itineraries[0].airlegs.size , 1

    end

    def test_round_trip

      from = ['DFW']
      to = ['CDG']
      departing_at = [DateTime.now + 1]
      returning_at = [DateTime.now >> 1]
      limit = 5

      passenger = Passenger.new(:adults, 25)
      builder = SearchForm::Builder.new
      search_form = builder
                        .from(from)
                        .to(to)
                        .departing_at(departing_at)
                        .returning_at(returning_at)
                        .type(:roundtrip)
                        .with_cabin_class(:economy)
                        .with_passenger(passenger)
                        .limited_results_to(limit)
                        .build!

      manager = Factory.build_flight_manager(:sabre, {
          client_id: 'V1:zej6hju9ltib108l:DEVCENTER:EXT',
          client_secret: 'wLPi0Sy2'
      }
      )

      itineraries = manager.get_avail(search_form)

      assert itineraries.size <= limit
      assert_equal itineraries[0].airlegs[0].departure_airport_code, from[0]
      assert_equal itineraries[0].airlegs[0].arrival_airport_code, to[0]
      assert_equal itineraries[0].airlegs[1].arrival_airport_code, from[0]
      assert_equal itineraries[0].airlegs[1].departure_airport_code, to[0]
      assert_equal itineraries[0].airlegs.size , 2

    end

    def test_open_jow

      from = ['DFW','MEX']
      to = ['CDG','LAS']
      departing_at = [DateTime.now + 1, DateTime.now + 10 ]
      returning_at = [DateTime.now >> 1, (DateTime.now >> 1) + 10  ]
      limit = 3

      passenger = Passenger.new(:adults, 25)
      builder = SearchForm::Builder.new
      search_form = builder
                        .from(from)
                        .to(to)
                        .departing_at(departing_at)
                        .returning_at(returning_at)
                        .type(:openjaw)
                        .with_cabin_class(:economy)
                        .with_passenger(passenger)
                        .limited_results_to(limit)
                        .build!

      manager = Factory.build_flight_manager(:sabre, {
          client_id: 'V1:zej6hju9ltib108l:DEVCENTER:EXT',
          client_secret: 'wLPi0Sy2'
      }
      )

      itineraries = manager.get_avail(search_form)

      assert itineraries.size <= limit
      assert_equal itineraries[0].airlegs[0].departure_airport_code, from[0]
      assert_equal itineraries[0].airlegs[0].arrival_airport_code, to[0]
      assert_equal itineraries[0].airlegs[1].departure_airport_code, from[1]
      assert_equal itineraries[0].airlegs[1].arrival_airport_code, to[1]
      assert_equal itineraries[0].airlegs.size , 2

    end

  end


  def test_open_jow_diff_passengers

    from = ['DFW','MEX','HMO']
    to = ['CDG','LAS','CUU']
    departing_at = [DateTime.now + 1, DateTime.now + 10, DateTime.now + 20 ]
    returning_at = [DateTime.now >> 1, (DateTime.now >> 1) + 10, (DateTime.now >> 1) + 20  ]
    limit = 3

    passenger = Passenger.new(:adults, 25)
    passenger2 = Passenger.new(:children, 10)
    builder = SearchForm::Builder.new
    search_form = builder
                      .from(from)
                      .to(to)
                      .departing_at(departing_at)
                      .returning_at(returning_at)
                      .type(:openjaw)
                      .with_cabin_class(:economy)
                      .with_passenger(passenger)
                      .with_passenger(passenger2)
                      .limited_results_to(limit)
                      .build!

    manager = Factory.build_flight_manager(:sabre, {
        client_id: 'V1:zej6hju9ltib108l:DEVCENTER:EXT',
        client_secret: 'wLPi0Sy2'
    }
    )

    itineraries = manager.get_avail(search_form)
    assert itineraries.size <= limit
    assert_equal itineraries[0].airlegs.size , 3
    assert_equal itineraries[0].airlegs[0].departure_airport_code, from[0]
    assert_equal itineraries[0].airlegs[0].arrival_airport_code, to[0]
    assert_equal itineraries[0].airlegs[1].departure_airport_code, from[1]
    assert_equal itineraries[0].airlegs[1].arrival_airport_code, to[1]
    assert_equal itineraries[0].airlegs[2].departure_airport_code, from[2]
    assert_equal itineraries[0].airlegs[2].arrival_airport_code, to[2]
  end

end
