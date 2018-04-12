require 'logger'

module Farandula

  module Utils

    class ExceptionsHelper

      @@logger = Logger.new File.new('farandula-ruby-errors.log', 'w')
      @@logger.level = Logger::DEBUG

      def self.handle_exceptions( class_exception, message )

        @@logger.error( message )
        printf message
        raise class_exception

      end

    end
  end

end
