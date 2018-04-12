require 'test_helper'
require 'minitest/autorun'

class Farandula::PassengerTest < Minitest::Test

  include Farandula


  def test_passenger_construction_fails
    assert_raises (ValidationError) { Passenger.new(:adults, 10) }
    assert_raises (ValidationError) { Passenger.new(:infants, 10) }
    assert_raises (ValidationError) { Passenger.new(:children, 2) }
    assert_raises (ValidationError) { Passenger.new(:children, 21) }
  end

  def test_passenger_construction_builds_a_correct_passenger

    passenger = Passenger.new(:adults, 25)
    assert_equal :adults, passenger.type
    assert_equal 25, passenger.age

    passenger = Passenger.new(:infants, 1)
    assert_equal :infants, passenger.type
    assert_equal 1, passenger.age

    passenger = Passenger.new(:children, 15)
    assert_equal :children, passenger.type
    assert_equal 15, passenger.age

  end

end 