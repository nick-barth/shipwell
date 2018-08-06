import { action } from 'typesafe-actions';

const ADD = "ADD_ONE";
const INCREMENT = "INCREMENT";

// CLASSIC API
export const increment = () => action(INCREMENT);
export const add = (amount: number) => action(ADD, amount);
