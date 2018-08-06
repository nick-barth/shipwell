import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from '../actions/tournament';

export type CountersAction = ActionType<typeof actions>;

export type CountersState = {
  readonly reduxCounter: number;
};

export default combineReducers<CountersState, CountersAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case 'ADD_ONE':
        return state + 1; // action: { type: "INCREMENT"; }
      case 'USE_OF_PAYLOAD':
        return state + action.payload; // action: { type: "ADD"; payload: number; }
      default:
        return state;
    }
  },
});
