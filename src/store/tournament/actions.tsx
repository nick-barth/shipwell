import { createStandardAction } from 'typesafe-actions';

const ADD = "ADD_TOURNAMENT";


export const addTournament = createStandardAction(ADD)<string>();
