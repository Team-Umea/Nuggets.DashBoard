// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    savings: 0,
};

// Reducer
const savingsReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SET_SAVINGS':
    return { ...state, savings: action.payload };
    default:
    return state;
}
};

// Create store
const store = configureStore({
    reducer: {
    savings: savingsReducer,
},
});

export default store;