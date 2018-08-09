import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as libraryActions from './actions';

export type LibraryAction = ActionType<typeof libraryActions>;

export type LibraryState = {
  readonly library: {
	  id: number,
	  name: string,
	  size: number,
	  teams: object[]
  };
};



export default combineReducers<LibraryState, LibraryAction>({
	library: (state:any = [], action:any) => {
		switch (action.type) {
			case 'ADD_TO_LIBRARY':
				const newTournament = {
					id: state.length + 1,
					name: action.payload.name,
					size: action.payload.size,
					teams: []
				};
				return state.concat([], newTournament)
			default:
				return state;
		}
	},
});
