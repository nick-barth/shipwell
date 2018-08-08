import { action } from 'typesafe-actions';

const ADD_TOURNAMENT = "ADD_TOURNAMENT";
const ADD_TEAM = "ADD_TEAM";

export const addTournament = (team: string) => action(ADD_TOURNAMENT, team);
export const addTeam = (team: string, id: number) => action(ADD_TEAM, { team, id });
