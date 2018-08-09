import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as libraryActions from './actions';

export type LibraryAction = ActionType<typeof libraryActions>;

export type LibraryState = {
  readonly library: {
	  collectionName: number,
	  photo: string,
	  releaseDate: number,
	  artistName: object[],
	  id: string
  };
};

export default combineReducers<LibraryState, LibraryAction>({
	library: (state:any = [], action:any) => {
		switch (action.type) {
			case 'ADD_TO_LIBRARY':
				const newState = state.concat([], {
					...action.payload
				});
				console.log(state);
				return newState;
			default:
				return state;
		}
	},
});
