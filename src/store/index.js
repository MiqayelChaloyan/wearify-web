import { configureStore } from '@reduxjs/toolkit';
import initialDataReducer from './features/initialDataSlice';
import booleanSlice from './features/booleanSlice';

const store = configureStore({
  reducer: {
    state: initialDataReducer,
    boolean: booleanSlice,
  },
});

export default store;