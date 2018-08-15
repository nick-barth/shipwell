import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as userActions from './actions';

export type UserAction = ActionType<typeof userActions>;

export type UserState = {
	user: {
		user: object,
		company: object
	}
};

export default combineReducers<UserState, UserAction>({
	user: (state:any = [], action:any) => {
		switch (action.type) {
			case 'ADD_USER_INFO':
				return action.payload;
			default:
				return state;
		}
	},
});
