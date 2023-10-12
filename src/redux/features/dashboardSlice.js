import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: "",
};

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		setUserId: (state, action) => {
			console.log(action);
			state.userId = action.payload;
		},
	},
});

export const { setUserId } = dashboardSlice.actions;

export default dashboardSlice.reducer;
