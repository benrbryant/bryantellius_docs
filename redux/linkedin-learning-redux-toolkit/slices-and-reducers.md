# Slices and Reducers

Slices are pieces of the app state (store).

## Creating a Slice

Create a slice with `createSlice`

```js
// in src/data/cartSlice.js

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action) => {
      const removeIdx = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(removeIdx, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

export default cartSlice;
```

Here is a shopping cart slice example with reducers for adding an item, removing an item, and clearing all items. _Items_ in this example are stored as product ids in a state array.

Once you create the reducers, you'll need to add them in the store configuration object.

```js
// src/data/store.js

// ...import statements
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// ...export statement
```

## Dispatching Slice Actions

Use the `useDispatch` hook from the react-redux package to get a `dispatch` function for dispatching store actions.

You have access to any slice's actions by importing the created slice, and referencing the `actions` object property.

Example:

```jsx
// in src/pages/products.page.jsx

import productList from "../data/productList.json";
import { useDispatch } from "react-redux";
import cartSlice from "../data/cartSlice.js";

const ProductsPage = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      {productList.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => dispatch(addToCart(product.id))}>
              Add to Cart
            </button>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
```

## Selecting Data in your Store

Use the `useSelector` hook from the react-redux package to get the current app state.

It takes in a function, called a _selector_, that is used for selecting the state value you need.

Example:

```jsx
// ...imports
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

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
