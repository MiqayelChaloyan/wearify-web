import { createSlice } from '@reduxjs/toolkit';

const booleanSlice = createSlice({
  name: 'boolean',
  initialState: false,
  reducers: {
    toggle: (state) => !state,
    setTrue: () => true,
    setFalse: () => false,
  },
});

export const { toggle, setTrue, setFalse } = booleanSlice.actions;
export default booleanSlice.reducer;
