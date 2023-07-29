import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IOrderState {
  name: string;
  date: string;
  variant: string;
  location: string;
}

const initialState: IOrderState = {
  name: '',
  date: '',
  variant: '',
  location: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeName: (state: IOrderState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeDate: (state: IOrderState, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    changeVariant: (state: IOrderState, action: PayloadAction<string>) => {
      state.variant = action.payload;
    },
    changeLocation: (state: IOrderState, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { changeDate, changeLocation, changeName, changeVariant } = orderSlice.actions;

export default orderSlice.reducer;
