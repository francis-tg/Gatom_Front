import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: {}
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transactionReducer: (state, action) => {
      switch (action.type) {
        case "ADD_AMOUNT":
          break;
        case "ADD_NUMBER":
          break;
        case "ADD_TYPE_TRANSACTION":
          break;
        default:
          break;
      }
    }
  }
});

export const {transactionReducer} = transactionSlice.actions;
export default transactionSlice.reducer;
