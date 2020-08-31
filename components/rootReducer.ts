import { combineReducers } from '@reduxjs/toolkit';
import pizzasReducer from './models/pizza';
import modalReducer from './models/modal';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;