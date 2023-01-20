const { createSlice } = require("@reduxjs/toolkit");

// {
//     "type": "expenseSlice/addExpenseAction",
//     "payload": {
//         "price": "444",
//         "name": "sddasd"
//     }
// }

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 100 },
      { name: "Orange", price: 22 },
    ],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log("addExpenseAction func is called");
      console.log("action", action);
      //currentSlice.expenseList.push({ name: "Watermelon", price: 33 });
      currentSlice.expenseList.push(action.payload);
    },
  },
});
export const { addExpenseAction } = expenseSlice.actions;
