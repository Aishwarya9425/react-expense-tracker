const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 100 },
      { name: "Orange", price: 22 },
    ],
  },
});
