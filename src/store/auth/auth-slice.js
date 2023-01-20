const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      status: "connected",
      name: "Aishwarya",
    },
  },
});
