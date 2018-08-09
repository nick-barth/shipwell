import { combineReducers } from 'redux';

import { libraryReducer } from './library';

const rootReducer = combineReducers({
  library: libraryReducer,
});

export default rootReducer;
