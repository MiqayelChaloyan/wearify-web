import { createSlice } from '@reduxjs/toolkit';
import formInitialValues from '../../components/form/formInitialValues'

const initialDataSlice = createSlice({
  name: 'initialData',
  initialState: { formInitialValues },
  reducers: {
    addData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addData } = initialDataSlice.actions;

export default initialDataSlice.reducer;