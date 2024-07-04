import { createSlice } from "@reduxjs/toolkit";
import { userSignin, getUserDetails, editUsername } from "./Action";

const initialState = {
    isLoading: false,
    isConnected: false,
    userInfo: null,
    token: null,
    error: "",
    fetchError: ""
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        logout: () => initialState, 
    },
    extraReducers: (builder) => {
        // for signin
        builder
            .addCase(userSignin.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(userSignin.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isConnected = true;
                state.token = payload.body.token;
                state.userInfo = payload;
                state.error = "";
            })
            .addCase(userSignin.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload || "An error occurred while signing in.";
            });

        // for fetching user details
        builder
            .addCase(getUserDetails.pending, (state) => {
                state.isLoading = true;
                state.fetchError = "";
            })
            .addCase(getUserDetails.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.userInfo = payload; 
                state.fetchError = "";
            })
            .addCase(getUserDetails.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.fetchError = payload || "An error occurred while fetching user data.";
            });

        // for edit username
        builder
            .addCase(editUsername.pending, (state) => {
                state.isLoading = true;
                state.fetchError = "";
            })
            .addCase(editUsername.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.userInfo) {
                    state.userInfo.body.userName = payload.body.userName; 
                }
            })
            .addCase(editUsername.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload === 'Unauthorized') {
                    localStorage.removeItem('token');
                    state.token = null;
                } else {
                    state.error = payload || "An error occurred while updating username.";
                }
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
