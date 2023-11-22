import { createSlice } from "@reduxjs/toolkit";

export const expensesTodaySlice = createSlice({
  name: "expensesToday",
  initialState: {
    expensesToday: "null",
  },
  reducers: {
    addExpensesToday: (state, action) => {
      state.expensesToday = action.payload;
    },
  },
});

export const { addExpensesToday } = expensesTodaySlice.actions;

export default expensesTodaySlice.reducer;
