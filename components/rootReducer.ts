import { combineReducers } from '@reduxjs/toolkit';
import pizzasReducer from './models/pizza';

const rootReducer = combineReducers({
  pizzas: pizzasReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;