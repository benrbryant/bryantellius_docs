# Asynchronous Redux Actions

A lot of state is managed with the Fetch API and asynchronous actions. Redux Toolkit provides a function middleware for creating async actions.

## Using `createAsyncThunk`

Use the `createAsyncThunk` function from the @reduxjs/toolkit package to create an asynchronous action with a name.

Here's a Fetch API example:

```js
// in src/data/productSlice.js

import productList from "./productList.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiUrl) => {
    const res = await fetch(apiUrl);
    return res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.data = productList.products;
        state.fetchStatus = "error";
      });
  },
});

export default productSlice;
```

Here we list out extra reducers depending on cases that are based on the fetch promise states (`fulfilled`, `pending`, or `rejected`).

Once you add the new slice reducer to the store, you can access it in other components.

## Accessing Asynchronously Fetched Data

Import the async thunk function and use it in a `useEffect` to fetch and update store state with the result of a Fetch API.

```jsx
// ...imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../data/productSlice";

const ProductsPage = () => {
  const { cart, products } = useSelector((state) => state);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts("URL"));
  }, [dispatch]);

  return (
    <div>
      {productList.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            {/* conditionally render Add/Remove button depending on product id being included in the cart product id state */}
            {!cartProductIds.includes(product.id) ? (
              <button onClick={() => dispatch(addToCart(product.id))}>
                Add to Cart
              </button>
            ) : (
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                Remove from Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
```
