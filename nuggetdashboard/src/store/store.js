import {  configureStore }
from '@reduxjs/toolkit';
import indexSavingSlice from "./indexSlice"
import bitcoinSavingSlice from "./bitcoinSlice"




const store = configureStore({
  reducer: {
    savings: indexSavingSlice,
    bitcoinSavings: bitcoinSavingSlice,

  },

});

export default store;
