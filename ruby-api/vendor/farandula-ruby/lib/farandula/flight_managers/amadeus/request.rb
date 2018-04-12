module Farandula
  module FlightManagers
    module Amadeus

      class Request

        def format_date(date)
          date.strftime('%Y-%m-%d')
        end

        def build_target_url_from_search!(search_form, api_key)

          number_of_results = "&number_of_results=#{search_form.offset}"
          passengers_data   = "&adults=#{search_form.passengers[:adults].size }"      if search_form.passengers[:adults]
          passengers_data   += "&children=#{search_form.passengers[:children].size }" if search_form.passengers[:children]
          passengers_data   += "&infants=#{search_form.passengers[:infants].size }"   if search_form.passengers[:infants]
          cabin             = "&travel_class=#{search_form.cabin_class}"

          search_form.departure_airport.each_with_index.map do |dep_airport, i|

            origin                = "&origin=#{dep_airport}"
            destination           = "&destination=#{search_form.arrival_airport[i]}"
            departing_date_search = format_date(search_form.departing_date[i])
            returning_date_search = search_form.returning_date[i] ? format_date(search_form.returning_date[i]) : nil
            departure_date        = "&departure_date=#{departing_date_search}"
            returning_date        = "&return_date=#{returning_date_search}"

            if search_form.roundtrip?

              "https://api.sandbox.amadeus.com/v1.2/flights/" \
                "low-fare-search?apikey=#{api_key}" \
                "#{cabin}" \
                "#{origin}" \
                "#{destination}" \
                "#{departure_date}" \
                "#{returning_date}" \
                "#{passengers_data}" \
                "#{number_of_results}"

            else
              "https://api.sandbox.amadeus.com/v1.2/flights/" \
                "low-fare-search?apikey=#{api_key}" \
                "#{cabin}" \
                "#{origin}" \
                "#{destination}" \
                "#{departure_date}" \
                "#{passengers_data}" \
                "#{number_of_results}"

            end

          end

        end

      end

    end # Amadeus ends

  end # FlightManagers ends

end # Farandula ends
