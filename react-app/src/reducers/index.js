import searchReducer from './search';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app: searchReducer,
  routing: routerReducer
});

export default rootReducer;
