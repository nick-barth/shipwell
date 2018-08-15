import { action } from 'typesafe-actions';

const ADD_USER_INFO = "ADD_USER_INFO";

export const addUserInfo = (info: string) => action(ADD_USER_INFO, info);
