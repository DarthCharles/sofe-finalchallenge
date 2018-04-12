require          'jbuilder'
require_relative '../../constants.rb'

module Farandula
  module FlightManagers
    module Sabre
      class Request

        include Farandula

        def format_date(date)
          date.strftime('%FT%T')
        end

        def extract_cabin_class(cabin_class)
          case cabin_class
          when :economy
            'Y'
          when :first
            'F'
          when :business
            'B'
          else :other
            'Y'
          end
        end


        def build_request_for!(search_form)
          @json = Jbuilder.new
          @json.OTA_AirLowFareSearchRQ do
            build_header(@json)
            build_destination_information(@json, search_form)
            build_travel_preferences(@json, search_form.cabin_class)
            build_travel_info_summary(@json, search_form)
            build_tpa_extensions(@json)
          end

          @json.target!
        end

        def build_travel_preferences(json, cabin_class)
          json.TravelPreferences do
            json.ValidInterlineTicket true
            json.CabinPref do
              json.array! [ 1 ] do |_|
                json.Cabin extract_cabin_class(cabin_class)
                json.PreferLevel 'Preferred'
              end
            end

            json.TPA_Extensions do
              json.TripType do
                json.Value 'Return'
              end

              json.LongConnectTime do
                json.Min 780
                json.Max 1200
                json.Enable true
              end

              json.ExcludeCallDirectCarriers do
                json.Enabled true
              end

            end
          end
        end

        def build_destination_information(json, search_form)

          elements = []
          search_form.departure_airport.each_with_index do| dep_airport, index |
           elements <<
            {
                origin: dep_airport,
                destination: search_form.arrival_airport[index],
                date: search_form.departing_date[index]
            }
          end

          # elements = [{
          #   origin: search_form.departure_airport,
          #   destination: search_form.arrival_airport,
          #   date: search_form.departing_date
          #   }
          # ]

          if search_form.roundtrip?
            elements << {
              origin: search_form.arrival_airport[0],
              destination: search_form.departure_airport[0],
              date: search_form.returning_date[0]
            }
          end
          # TODO: handle :multiple

          json.OriginDestinationInformation do
            json.array! elements.each_with_index.to_a do |(element, idx)|
              build_flight_info(
                json,
                (idx + 1).to_s,
                element[:origin],
                element[:date],
                element[:destination]
              )
            end
          end
        end


        def build_flight_info(json, id, departing_airport, departing_date, destination_airport)
          json.RPH id.to_s
          json.DepartureDateTime format_date(departing_date)
          json.OriginLocation do
            json.LocationCode departing_airport
          end

          json.DestinationLocation do
            json.LocationCode destination_airport
          end

          json.TPA_Extensions do
            json.SegmentType do
              json.Code 'O'
            end
          end

        end

        def build_travel_info_summary(json, search_form)

          total_passengers   = search_form.passengers.map{|_, list| list.size }.reduce(:+)
          infants_not_seated = search_form.passengers[:infants]&.size || 0

          json.TravelerInfoSummary do
            json.SeatsRequested do
              json.array! [ total_passengers - infants_not_seated ]
            end

            json.AirTravelerAvail do
              json.array! [ 1 ] do |_|
                json.PassengerTypeQuantity do
                  json.array! search_form.passengers do |type, list|
                    json.Code extract_code_for_passenger(type)
                    json.Quantity list.size
                  end
                end
              end
            end
          end
        end

        def extract_code_for_passenger(passenger_type)
          case passenger_type
          when PassengerType::ADULTS
            'ADT'
          when PassengerType::CHILDREN
            'CNN'
          when PassengerType::INFANTS
            'INF'
          when PassengerType::INFANTSONSEAT
            'INS'
          else
            ''
          end
        end

        def build_tpa_extensions(json)
          json.TPA_Extensions do
            json.IntelliSellTransaction do
              json.RequestType do
                json.Name '50ITINS'
              end
            end
          end
        end

        def build_header(json)

          json.Target 'Production'
          json.POS do
            json.Source do
              json.array! [ 1 ] do |_|
                json.PseudoCityCode 'F9CE'
                json.RequestorID do
                  json.Type  '1'
                  json.ID  '1'
                  json.set! :CompanyName, {}
                end
              end
            end
          end

        end

      end

    end # Sabre ends
  end # FlightManagers ends
end # Farandula ends
