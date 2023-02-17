// A mock function to mimic making an async request for data
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryModel } from "../../models/category";

export const fetchCategory = createApi({
  reducerPath: "api/category/",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.90.227.238:" }),
  endpoints: (builder) => ({}),
});
