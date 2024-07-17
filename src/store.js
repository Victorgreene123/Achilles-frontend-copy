import { configureStore, createSlice } from "@reduxjs/toolkit";

const baseUrlSlice = createSlice({
  name: "baseUrl",
  initialState: "http://achilles-web-be.onrender.com/",
  reducers: {
    setBaseURL: (state, action) => action.payload,
  },
});

export const { setBaseURL } = baseUrlSlice.actions;

const store = configureStore({
  reducer: {
    baseUrl: baseUrlSlice.reducer,
  },
});

export default store;
