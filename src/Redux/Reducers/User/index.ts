import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	user?: {
		name: string;
		token: string;
		avatar: string;
	};
	fetching: boolean;
	error?: {
		status: number;
		message: string;
	};
}

const initialState = {
	user: undefined,
	fetching: false,
	error: undefined,
	token: undefined,
} as UserState;

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logIn_Start: (state) => {
			state.error = undefined;
			state.fetching = true;
		},
		logIn_Success: (state, action: PayloadAction<UserState["user"]>) => {
			state.user = action.payload;
			state.error = undefined;
			state.fetching = false;
		},
		logIn_Failure: (state, action: PayloadAction<UserState["error"]>) => {
			state.error = action.payload;
			state.fetching = false;
		},
		logOut: (state) => {
			state.user = undefined;
		},
		signUp_Start: (state) => {
			state.error = undefined;
			state.fetching = true;
		},
		signUp_Success: (state) => {
			state.error = undefined;
			state.fetching = false;
		},
		signUp_Error: (state, action: PayloadAction<UserState["error"]>) => {
			state.error = action.payload;
			state.fetching = false;
		},
	},
});

export const {
	logIn_Start,
	logIn_Success,
	logIn_Failure,
	logOut,
	signUp_Start,
	signUp_Success,
	signUp_Error
} = userSlice.actions;

export default userSlice.reducer;
