import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  savings: 0,
};


const savingsSlice = createSlice({
  name: 'savings',
  initialState,
  reducers: {

    setSavings: (state, action) => {
      state.savings = action.payload;
    },
  },
});


export const { setSavings } = savingsSlice.actions;


const store = configureStore({
  reducer: {
    savings: savingsSlice.reducer,
  },
});

export default store;
