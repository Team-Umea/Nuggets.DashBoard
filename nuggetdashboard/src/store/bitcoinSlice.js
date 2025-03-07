import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    savings: 0,
  };
  
  
  const BitcoinSavingSlice = createSlice({
    name: 'bitcoinSavings',
    initialState,
    reducers: {
  
      bitcoinGrowth: (state, action) => {
        state.savings = action.payload;
      },
    },
  });
  
  export const { bitcoinGrowth } = BitcoinSavingSlice.actions;
  export default BitcoinSavingSlice.reducer