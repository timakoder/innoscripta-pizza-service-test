import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { RootState } from '../../rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzas, GetPizzasType, GetPizzaParams } from './api';
import { PizzaData } from '../../../server/services/pizza';

export type SelectedPizzaData = PizzaData & { selected: boolean };

const addSelectedPropToData = (data: PizzaData[], metaData: string[]): SelectedPizzaData[] => data.map(d => ({
  ...d,
  selected: !!metaData.find(s => s === d.name)
}))

export type PizzaType = Omit<GetPizzasType, 'tags' | 'ingredients'> & {
  tags: SelectedPizzaData[],
  ingredients: SelectedPizzaData[]
}

export type PizzaState = {
  data: PizzaType,
  loading: boolean
}

const initialState: PizzaState = {
  data: {
    pizzas: [],
    tags: [],
    ingredients: [],
    meta: {
      total: 0,
      tags: [],
      ingredients: []
    }
  },
  loading: false
};

const pizzasSlice = createSlice({
  name: 'pizzasSlice',
  initialState,
  reducers: {
    fetchPizzasStart(state) {
      state.loading = true
    },
    setPizzas(state, action: PayloadAction<GetPizzasType>) {
      const { payload } = action;
      state.data.pizzas = payload.pizzas;
      state.data.meta = payload.meta;
      state.data.tags = addSelectedPropToData(payload.tags, payload.meta.tags);
      state.data.ingredients = addSelectedPropToData(payload.ingredients, payload.meta.ingredients);
      state.loading = false;
    }
  }
});

export const actions = pizzasSlice.actions;

export default pizzasSlice.reducer;

export const fetchPizzas = (params: GetPizzaParams): AppThunk => async (dispatch) => {
  dispatch(actions.fetchPizzasStart());
  const pizzas = await getPizzas(params);
  dispatch(actions.setPizzas(pizzas));
}

export const usePizzas = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state: RootState) => state.pizzas);
  return {
    pizzas,
    dispatch
  }
}