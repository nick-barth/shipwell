import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as tournamentActions from './actions';

export type TournamentAction = ActionType<typeof tournamentActions>;

export type TournamentState = {
  readonly tournaments: {
	  id: number,
	  name: string,
	  size: number,
	  teams: object[]
  };
};



export default combineReducers<TournamentState, TournamentAction>({
	tournaments: (state:any = [], action:any) => {
		switch (action.type) {
			case 'ADD_TOURNAMENT':
				const newTournament = {
					id: state.length + 1,
					name: action.payload.name,
					size: action.payload.size,
					teams: []
				};
				return state.concat([], newTournament)
			case 'ADD_TEAM':
				const { id, team } = action.payload;
				const newState = state.map((item:any) => {
					if (item.id === parseInt(id, 10)) {
						item.teams.push({
							id: item.teams.length + 1,
							name: team
						});
						return item;
					} else {
						return item;
					}
				});

				return newState;
			default:
				return state;
		}
	},
});
