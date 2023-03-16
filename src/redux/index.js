import {configureStore} from "@reduxjs/toolkit";
import transactionReducer from "./features/transaction";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer
  }
});
