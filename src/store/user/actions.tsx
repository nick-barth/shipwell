import { action } from 'typesafe-actions';

const ADD_USER_INFO = "ADD_USER_INFO";

export const addUserInfo = (userInfo:object) => action(ADD_USER_INFO, userInfo);
