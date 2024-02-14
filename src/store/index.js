import { configureStore } from '@reduxjs/toolkit';
import initialDataReducer from './features/initialDataSlice';

const store = configureStore({
  reducer: {
    initialData: initialDataReducer,
  },
});

export default store;