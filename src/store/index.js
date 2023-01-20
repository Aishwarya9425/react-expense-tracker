import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { authSlice } from "./auth/auth-slice";
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    AUTH: authSlice.reducer,
  },
});

export { store };
