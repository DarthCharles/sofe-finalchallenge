require 'test_helper'
require 'minitest/autorun'

class Farandula::SearchFormTest < Minitest::Test

  include Farandula

  def test_search_form_null_validated

    from          = ['CUU']
    to            = ['SFO']

    assert_raises_with_message ValidationError, 'arrival_airport cannot be empty', 'err' do
      builder = SearchForm::Builder.new

      builder.from( from ).build!
    end

    assert_raises_with_message ValidationError, 'departure_airport cannot be empty', 'err' do
      builder = SearchForm::Builder.new
      builder.to(to).build!
    end

    assert_raises_with_message ValidationError, 'departing_date cannot be empty', 'err' do
      builder = SearchForm::Builder.new
      builder
        .from( from )
        .to( to )
        .build!
    end

  end

  def test_dates_are_validated

    from          = ['SFO']
    to            = ['CUU']
    assert_raises_with_message ValidationError, 'returning_date cannot be empty', 'err' do
      builder = SearchForm::Builder.new
      builder
        .from(from)
        .to(to)
        .type(:roundtrip)
        .departing_at( [DateTime.now + 1] )
        .build!
    end

    assert_raises_with_message ValidationError, 'departing_date can\'t be in the past', 'err' do
      builder = SearchForm::Builder.new
      builder
        .from(from)
        .to(to)
        .departing_at( [DateTime.now - 10])
        .build!
    end

    assert_raises_with_message ValidationError, 'returning_date can\'t be before departing_date', 'err' do
      builder = SearchForm::Builder.new
      builder
        .from(from)
        .to(to)
        .type(:roundtrip)
        .departing_at([DateTime.now + 10])
        .returning_at([DateTime.now + 1])
        .build!
    end


  end

end
