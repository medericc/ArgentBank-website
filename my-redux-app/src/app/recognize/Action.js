import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action for co
export const userSignin = createAsyncThunk(
    "auth/signin", 
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
        
            const { data } = await axios.post(
                'http://localhost:3001/api/v1/user/login', 
                { email, password },
                config
            );

            return data;
        } catch (error) {
            let errorMessage = "An error occurred while signing in.";

            if (error.response) {
                if (error.response.status === 400) {
                    errorMessage = "Invalid email or password.";
                } else if (error.response.data.message) {
                    errorMessage = error.response.data.message;
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            return rejectWithValue(errorMessage);
        }
    }
);

// Action to fetch user info
export const getUserDetails = createAsyncThunk(
    'auth/getUserDetails',
    async (token, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };

            const { data } = await axios.post(
                'http://127.0.0.1:3001/api/v1/user/profile', 
                {}, 
                config
            );

            return data;
        } catch (error) {
            let errorMessage = "An error occurred while fetching user data.";

            if (error.response) {
                if (error.response.status === 404) {
                    errorMessage = "Server error, please try later.";
                } else if (error.response.data.message) {
                    errorMessage = error.response.data.message;
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            return rejectWithValue(errorMessage);
        }
    }
);

// Action to update username
export const editUsername = createAsyncThunk(
    "auth/editUsername", 
    async ({ userName, token }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
        
            const { data } = await axios.put(
                'http://localhost:3001/api/v1/user/profile', 
                { userName }, 
                config
            );

            return data;
        } catch (error) {
            let errorMessage = "An error occurred while updating username.";

            if (error.response) {
                errorMessage = error.response.data.message || errorMessage;
            } else if (error.message) {
                errorMessage = error.message;
            }

            return rejectWithValue(errorMessage);
        }
    }
);
