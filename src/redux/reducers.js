import { combineReducers } from 'redux';
import locationReducer from './modules/location';

export default combineReducers({
  location: locationReducer
});
