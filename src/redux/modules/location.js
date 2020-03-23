// ACTIONS
const GET_LOCATIONS = 'GET_LOCATIONS';

// ACTION CREATORS
// Actions are payloads of information that send data from your
// application to your store. They are the only source of information
// for the store. You send them to the store using store.dispatch().

export const getLocations = (tag) => ({
  type: GET_LOCATIONS,
  payload: tag
});

// REDUCER

export default (
  state = {
    locations: [
      'Creston',
      'Dease Lake',
      'Fort Nelson',
      'Prince George',
      'Revelstoke',
      'Terrace',
      'Whistler'
    ]
  },
  action
) => {
  switch (action.type) {
    case GET_LOCATIONS: {
      return { ...state, locations: action.payload };
    }
    default:
      return state;
  }
};
