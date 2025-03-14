import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    savings: 0,
  };
  
  
  const indexSavingSlice = createSlice({
    name: 'savings',
    initialState,
    reducers: {
  
      indexGrowth: (state, action) => {
        state.savings = action.payload;
      },
    },
  });
  
  export const { indexGrowth } = indexSavingSlice.actions;
  export default indexSavingSlice.reducer