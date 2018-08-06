import { combineReducers } from 'redux';

import { tournamentReducer } from './tournament';

const rootReducer = combineReducers({
  tournament: tournamentReducer,
});

export default rootReducer;
