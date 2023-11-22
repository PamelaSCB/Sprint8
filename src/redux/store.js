import { configureStore } from "@reduxjs/toolkit";

import expensesTodayReducer from "./slices/expensesTodaySlice";
import graphExpensesReducer from "./slices/graphExpensesSlice";
import totalBalanceReducer from "./slices/totalBalanceSlice";
import variationYesterdayVsTodayReducer from "./slices/VariationYesterdayVsTodaySlice";


export const store = configureStore({
  reducer: {
    expensesToday: expensesTodayReducer,
    graphExpenses: graphExpensesReducer,
    totalBalance: totalBalanceReducer,
    variationYesterdayVsToday: variationYesterdayVsTodayReducer,
  },
});
