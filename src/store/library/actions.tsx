import { action } from 'typesafe-actions';

const ADD_TO_LIBRARY = "ADD_TO_LIBRARY";

export const addToLibrary = (album: string) => action(ADD_TO_LIBRARY, album);
