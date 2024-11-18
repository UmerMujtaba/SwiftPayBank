import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = {...action.payload};
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserData, setStatus, setError } = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
