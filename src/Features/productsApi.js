import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;

// Can fetch data from backend using "http://localhost:5000/product"
// "https://fakestoreapi.com/products"
