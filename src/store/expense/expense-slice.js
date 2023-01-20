const { createSlice } = require("@reduxjs/toolkit");
export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log("addExpenseAction func is called");
      console.log("action", action);
      //currentSlice.expenseList.push({ name: "Watermelon", price: 33 });
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      console.log("setIncomeAction func is called");
      console.log("action", action);
      currentSlice.income = action.payload;
    },
  },
});
export const { addExpenseAction,setIncomeAction } = expenseSlice.actions;
