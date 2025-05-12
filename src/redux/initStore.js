import { walletSlice } from "@/redux/slices/walletSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    walletStore: walletSlice.reducer,
  },
});
