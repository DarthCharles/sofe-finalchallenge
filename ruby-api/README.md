# Ruby back-end
## Routes
This back-end contains two routes:

- `/api/airports`
- `/api/flights`

### End-point for airports

This end-point receives the parameter `pattern` and send it to other server that handles this request and returns the desired data. Finally this data is sent back to the client that made the request. 

Here's the code:

```
get '/api/airports' do
    pattern = params['pattern']
    uri = URI(serverUrl+'/api/airports?pattern='+pattern)
    return Net::HTTP.get(uri)
end
```
### End-point for flights
This end-point receives the next parameters:

- departingAirportCodes
- departingDates
- arrivalAirportCodes
- type
- passenger
- cabin

The parameters as the `api/airports` end-point are sent to other server that handles the request and returns the desired data and finally is sent to the client that made the request to this end-point.

Here's the code:

```
get '/api/flights' do
    departingAirportCodes = params['departingAirportCodes']
    departingDates = params['departingDates']
    departingTimes = params['departingTimes']
    arrivalAirportCodes = params['arrivalAirportCodes']
    type = params['type']
    passenger = params['passenger']
    cabin = params['cabin']
    
    request = serverUrl+'/api/flights?' +
                'departingAirportCodes=' + departingAirportCodes +
                '&departingDates=' + departingDates +
                '&departingTimes=' + departingTimes +
                '&arrivalAirportCodes=' + arrivalAirportCodes +
                '&type=' + type +
                '&passenger=' + passenger +
                '&cabin=' + cabin
    
    if type == roundTripTag
        request = request + '&returnDates=' + params['returnDates'] + 
                            '&returnTimes=' + params['returnTimes']
    end
    uri = URI(request)
    
    result = Net::HTTP.get(uri)
    return result
end
```