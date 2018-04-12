import { push } from 'react-router-redux';
import { fetchAirtportByName, fetchFlightInventory } from './../api/search';

export function setAirports(airports) {
  return {
    type: 'SET_AIRPORTS',
    airports
  };
}

export function setFlightSearch(flightSearch) {
  return {
    type: 'SET_FLIGHT_SEARCH',
    flightSearch
  };
}

export function setIsFetchingResults(isFetchingResults) {
  return {
    type: 'SET_IS_FETCHING_RESULTS',
    isFetchingResults
  };
}

export function setFlightResults(flightResults) {
  return {
    type: 'SET_FLIGHT_RESULTS',
    flightResults
  };
}

export function fetchAirportList(airport) {
  return dispatch =>
    fetchAirtportByName(airport)
      .then(data => {
        dispatch(setAirports(data));
      });
}

export function fetchFlightResults(searchParams) {
  return dispatch => {
    dispatch(setIsFetchingResults(true));
    dispatch(setFlightSearch(searchParams));
    fetchFlightInventory(searchParams)
      .then(data => {
        dispatch(setFlightResults(data));
        dispatch(push('/results'));
        dispatch(setIsFetchingResults(false));
      }).catch(() => {
        dispatch(setIsFetchingResults(false));
      });
  };
}
