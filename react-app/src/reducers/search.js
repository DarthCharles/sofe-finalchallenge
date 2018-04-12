import { fromJS, List, Map } from 'immutable';
// import { stubbedSearch, stubbedResponse } from './../utils/stubs';
/** Uncomment the line above in order to get avail, don't forget to replace
 * flightResults and flightSearch with stubbed data */

const initialState = fromJS({
  airports: List(),
  isFetchingResults: false,
  flightResults: List(),
  flightSearch: Map()
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_AIRPORTS':
      return state.set('airports', fromJS(action.airports || []));
    case 'SET_IS_FETCHING_RESULTS':
      return state.set('isFetchingResults', action.isFetchingResults);
    case 'SET_FLIGHT_RESULTS':
      return state.set('flightResults', fromJS(action.flightResults) || []);
    case 'SET_FLIGHT_SEARCH':
      return state.set('flightSearch', fromJS(action.flightSearch) || []);
    default:
      return state;
  }
}
