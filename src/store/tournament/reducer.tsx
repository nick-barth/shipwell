import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as tournamentActions from './actions';

export type TournamentAction = ActionType<typeof tournamentActions>;

export type TournamentState = {
  readonly tournaments: {
	  id: number,
	  size: number,
	  teams: object[]
  };
};



export default combineReducers<TournamentState, TournamentAction>({
  tournaments: (state:any = [], action:any) => {
    switch (action.type) {
      case 'ADD_TOURNAMENT':
	  	console.log(action);
	  	const newTournament = {
			  id: 3,
			  size: action.payload.size,
			  teams: []
		};
        return state.concat([], newTournament)
      default:
        return state;
    }
  },
});
