import {  configureStore }
from '@reduxjs/toolkit';
import indexSavingSlice from "./indexSlice"




const store = configureStore({
  reducer: {
    savings: indexSavingSlice
  },
});

export default store;
