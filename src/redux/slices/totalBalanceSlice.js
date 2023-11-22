import { createSlice } from "@reduxjs/toolkit";

export const totalBalanceSlice = createSlice({
  name: "totalBalance",
  initialState: {
    totalBalance: "null",
  },
  reducers: {
    addTotalBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
  },
});

export const { addTotalBalance } = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;
