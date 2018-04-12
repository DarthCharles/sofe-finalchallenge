require 'farandula/constants'

module Farandula
  
  class Passenger

    attr_reader :type, :age
    
    def initialize(type=nil, age=nil)
      @type = type
      @age  = age
      validate_age!
    end  

    def validate_age!
      if @type == PassengerType::ADULTS && @age < 18
        raise ValidationError.new("age #{@age} does not correspond to ADULTS type")
      elsif @type == PassengerType::CHILDREN && (@age > 18 || @age < 3)
        raise ValidationError.new("age #{@age} does not correspond to CHILDREN type")
      elsif (@type == PassengerType::INFANTSONSEAT || @type == PassengerType::INFANTS) && @age > 3
        raise ValidationError.new("age #{@age} does not correspond to [INFANTS | INFANTSONSEAT] type")
      end
    end

  end

  def to_s
    "Type #{type}, Age #{age}."
  end

  
end