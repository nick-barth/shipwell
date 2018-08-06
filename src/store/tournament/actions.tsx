import { createStandardAction } from 'typesafe-actions';

const ADD = "ADD_ONE";
const INCREMENT = "INCREMENT";


export const increment = createStandardAction(INCREMENT)<void>();
export const add = createStandardAction(ADD)<number>();
