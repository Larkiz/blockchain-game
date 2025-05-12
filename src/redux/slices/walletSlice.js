import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "products",
  initialState: {
    publicKey: null,
    privateKey: null,
    balance: 0,
    transactions: [],
  },

  reducers: {
    initStore: (state, { payload }) => {
      state.publicKey = payload.publicKey;
      state.privateKey = payload.privateKey;
      state.balance = payload.balance;
      state.transactions = payload.transactions;
    },
    onTransaction: (state, { payload }) => {
      state.balance = payload.balance;
      state.transactions = [payload.newTransaction, ...state.transactions];
    },
  },
});

// default
export const { initStore, onTransaction } = walletSlice.actions;
