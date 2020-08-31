import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { stat } from 'fs';
import { Pizza } from '../../../server/services/pizza';

export type LoginProps = {};

export type AddToCartProps = {
  item: Pizza
}

export type MessageProps = {
  title: string,
  message?: string,
  isError?: boolean
}

export type ModalState = {
  login?: LoginProps,
  addToCart?: AddToCartProps,
  message?: MessageProps
};

const initialState: ModalState = {}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    close(state) {
      state.login = undefined;
      state.addToCart = undefined;
      state.message = undefined;
    },
    openLogin(state) {
      state.login = {};
      state.addToCart = undefined;
      state.message = undefined;
    },
    openMessage(state, action: PayloadAction<MessageProps>) {
      state.message = action.payload;
      state.login = undefined;
      state.addToCart = undefined;
    },
    openAddtoCart(state, action: PayloadAction<AddToCartProps>) {
      state.addToCart = action.payload;
      state.login = undefined;
      state.message = undefined;
    }
  }
});

export default modalSlice.reducer;

export const useModal = () => {
  const modalState = useSelector((state: RootState) => state.modal);
  return modalState;
}

export const useModalActions = () => {
  const dispatch = useDispatch();

  return {
    close: () => dispatch(modalSlice.actions.close()),
    openLogin: () => dispatch(modalSlice.actions.openLogin()),
    openMessage: (props: MessageProps) => dispatch(modalSlice.actions.openMessage(props)),
    openAddToCart: (props: AddToCartProps) => dispatch(modalSlice.actions.openAddtoCart(props))
  }
}
