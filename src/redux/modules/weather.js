import weather from '../config.js';

// ACTIONS
const GET_LOCATIONS = 'GET_LOCATIONS';
const GET_SELECTED_LOCATION = 'GET_SELECTED_LOCATION';

// ACTION CREATORS
// Actions are payloads of information that send data from your
// application to your store. They are the only source of information
// for the store. You send them to the store using store.dispatch().

export const getSelectedLocation = (selectedLocation) => ({
  type: GET_SELECTED_LOCATION,
  payload: selectedLocation
});

// const locationList = ({ config }) => ();

export const getLocations = () => ({
  type: GET_LOCATIONS,
  payload: weather
});

// REDUCER

export default (
  state = {
    selectedLocation: '',
    locationList: weather
  },
  action
) => {
  switch (action.type) {
    case GET_LOCATIONS: {
      return { ...state, locationList: action.payload };
    }
    default:
      return state;
  }
};
