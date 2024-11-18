import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardsData: [], // Initialize cardsData as an empty array
  status: 'idle',
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsData: (state, action) => {
      // Push new card data into the array (state.cardsData is now an array)
      state.cardsData.push(action.payload); 
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCardsData, setStatus, setError } = cardsSlice.actions;
export default cardsSlice.reducer;
