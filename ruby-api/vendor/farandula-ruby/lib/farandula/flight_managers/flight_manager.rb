module Farandula
  module FlightManagers

    class FlightManager

      def initialize 
        raise NotImplementedError, 'abstract class can\'t be initialized'
      end 

      def get_avail(search_form) 
        raise NotImplementedError
      end
    end  
     
  end 
end

