import { combineReducers } from 'redux';

// Reducers
import { TournamentReducer } from './tournament'

const rootReducer = combineReducers({
  tournament: TournamentReducer,
});

export default rootReducer;
