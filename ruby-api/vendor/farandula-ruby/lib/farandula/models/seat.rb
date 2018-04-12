module Farandula

  class Seat

    attr_accessor :classCabin, :place

    def initialize(
        classCabin = nil,
        place = nil
    )
      @classCabin  = classCabin
      @place       = place
    end

    def to_s
      "cabin #{classCabin}, place code #{place}."
    end

  end

end
