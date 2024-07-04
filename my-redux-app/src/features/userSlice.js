// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { //co et recup info user
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: !!localStorage.getItem('user'),
};

export const updateUsername = createAsyncThunk(
  'user/updateUsername',
  async (updatedProfileData, thunkAPI) => {
    try {
      const response = await fetch('/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfileData),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUsername.fulfilled, (state, action) => {
      state.user.username = action.payload.username;
      localStorage.setItem('user', JSON.stringify(state.user));
    });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
