
require_relative './lib/farandula/flight_managers/sabre/request.rb'
require_relative './lib/farandula/dels/search_form.rb'
require_relative './lib/farandula/factory.rb'


include Farandula
include Farandula::FlightManagers::Sabre

builder     = SearchForm::Builder.new
search_form = builder
                .from('CUU')
                .to('SFO')
                .departing_at(DateTime.new(2017,12,24))
                .returning_at(DateTime.new(2017,12,30))
                .type(:roundtrip)
                .with_cabin_class('Y')
                .with_passenger({name: 'Daniel'})
                .with_passenger({name: 'Perla'})
                .build!


manager = Factory.build_flight_manager(:sabre, {
  client_id: 'V1:zej6hju9ltib108l:DEVCENTER:EXT', 
  client_secret: 'wLPi0Sy2',
  target_url: 'https://api.test.sabre.com/v3.1.0/shop/flights?mode=live&limit=50&offset=1'
  }
)
puts manager.get_avail(search_form)