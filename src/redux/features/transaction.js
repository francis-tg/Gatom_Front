import {$CombinedState, createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: {}
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transactionReducer: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const {transactionReducer} = transactionSlice.actions;
export default transactionSlice.reducer;
