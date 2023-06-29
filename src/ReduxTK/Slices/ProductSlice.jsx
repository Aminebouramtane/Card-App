import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("productSlice/fetchData", async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // state.push(action.payload)
      return action.payload;
    });
  },
});

export default productSlice.reducer;
