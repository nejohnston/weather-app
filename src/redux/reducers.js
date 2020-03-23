import { combineReducers } from 'redux';
import weatherReducer from './modules/weather';

export default combineReducers({
  weather: weatherReducer
});
