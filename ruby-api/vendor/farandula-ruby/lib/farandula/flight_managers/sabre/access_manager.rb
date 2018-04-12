
require 'rest-client'
require 'base64'
require 'json'
require 'hashie'

require_relative '../../errors.rb'

module Farandula
  module FlightManagers
    module Sabre
  
      class AccessManager 
        
        attr_reader :access_token, :token_type, :expires_in
        
        def initialize(client_id, client_secret)

          begin 
            payload = {'grant_type' => 'client_credentials'}
            headers = {
              accept: :json,
              Authorization: build_credentials(client_id, client_secret)
            }  

            response   = RestClient.post("https://api.test.sabre.com/v2/auth/token", payload, headers)
            parsed_obj = Hashie::Mash.new(JSON.parse(response))

            @access_token  = parsed_obj.access_token 
            @token_type    = parsed_obj.token_type
            @expires_in    = parsed_obj.expires_in
             
          rescue RestClient::Unauthorized => e 
            raise UnauthorizedError.new(e)
          end 
        end


        def build_auth_token
          "#{@token_type.capitalize} #{@access_token}"
        end 

        private 
          def build_credentials(client_id, client_secret) 
            encoded_id     = Base64.strict_encode64(client_id) 
            encoded_secret = Base64.strict_encode64(client_secret)
            encoded        = Base64.strict_encode64("#{encoded_id}:#{encoded_secret}")
            "Basic #{encoded}"
          end 
        #private ends

      end 
    end 
  end
end