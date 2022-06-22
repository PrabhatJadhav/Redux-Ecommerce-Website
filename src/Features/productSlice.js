import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  items: [],
  status: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;

// Slice --> Logic containing reducers & actions
// No different files for them
