import { createSlice } from "@reduxjs/toolkit";

export const variationYesterdayVsTodaySlice = createSlice({
  name: "variationYesterdayVsToday",
  initialState: { VariationYesterdayVsTodaySlice: "null" },
  reducers: {
    addVariation: (state, action) => {
      state.VariationYesterdayVsTodaySlice = action.payload;
    },
  },
});

export const { addVariation } = variationYesterdayVsTodaySlice.actions;
export default variationYesterdayVsTodaySlice.reducer;
