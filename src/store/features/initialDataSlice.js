import { createSlice } from '@reduxjs/toolkit';

const initialDataSlice = createSlice({
  name: 'initialData',
  initialState: {
    feet: '',
    inches: '',
    weight: '',
    selectedHeight: 'cm',
    selectedWeight: 'kg',
    age: '',
    range: '',
  },
  reducers: {
    addData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addData } = initialDataSlice.actions;

export default initialDataSlice.reducer;