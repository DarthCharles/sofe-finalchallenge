import { request, addSerializedQueryParams } from './httpUtils';

export function fetchAirtportByName(locationString) {
  const searchParams = {
    pattern: locationString
  };
  return request(`/airports?${addSerializedQueryParams(searchParams)}`)
    .then(data => data.json);
}

export function fetchFlightInventory(params) {
  const searchParams = {
    passenger: `children:${params.children},infants:0,infantsOnSeat:0,adults:${params.adults}`,
    departingAirportCodes: params.from.iata,
    arrivalAirportCodes: params.to.iata,
    departingDates: params.departureDate,
    returnDates: params.returnDate,
    returnTimes: '00:00:00',
    departingTimes: '00:00:00',
    type: 'roundTrip',
    limit: 100,
    gds: 'sabre'
  };


  return request(`/flights?${addSerializedQueryParams(searchParams)}`)
    .then(data => data.json);
}
