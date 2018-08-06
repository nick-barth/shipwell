import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as tournamentActions from './actions';

export type TournamentAction = ActionType<typeof tournamentActions>;

export type TournamentState = {
  readonly reduxCounter: number;
};



export default combineReducers<TournamentState, TournamentAction>({
  reduxCounter: (state = 0, action:any) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1; // action: { type: "INCREMENT"; }
      case 'ADD':
        return state + action.payload; // action: { type: "ADD"; payload: number; }
      default:
        return state;
    }
  },
});
