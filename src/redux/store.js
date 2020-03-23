import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from './node_modules/redux-devtools-extension';
import thunk from './node_modules/redux-thunk';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
