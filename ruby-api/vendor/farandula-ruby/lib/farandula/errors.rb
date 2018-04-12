
module Farandula

  class Error < StandardError; end 
  class NotFoundError < Error; end
  class UnauthorizedError < Error; end
  class FlightManagerNotImplementedError < Error; end
  class ActionUnsupported < Error; end
  class CabinClassNotValidError < Error; end
  class ValidationError < Error; end
  
end