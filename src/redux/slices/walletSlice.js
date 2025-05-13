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
    onMine: (state, { payload }) => {
      state.balance += payload.reward;
      state.transactions = [payload.newTransaction, ...state.transactions];
    },
    setPrivateKey: (state, { payload }) => {
      state.privateKey += payload;
    },
  },
});

// default
export const { initStore, onTransaction, onMine, setPrivateKey } =
  walletSlice.actions;
