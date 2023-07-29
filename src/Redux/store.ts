import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order/orderslice';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
