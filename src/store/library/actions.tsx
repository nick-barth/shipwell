import { action } from 'typesafe-actions';

const ADD_TEAM = "ADD_TEAM";

export const addToLibrary = (song: string) => action(ADD_TEAM, song);
