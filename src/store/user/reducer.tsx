import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as userActions from './actions';

export type UserAction = ActionType<typeof userActions>;

export type UserState = {
	user: {
		collectionName: number,
		photo: string,
		releaseDate: number,
		artistName: object[],
		id: string
	}
};

export default combineReducers<UserState, UserAction>({
	user: (state:any = [], action:any) => {
		switch (action.type) {
			case 'ADD_TO_LIBRARY':
				const newState = [{
					...action.payload
				}].concat([], state);
				return newState;
			default:
				return state;
		}
	},
});
