import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("Cart Items")
    ? JSON.parse(localStorage.getItem("Cart Items"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Increased Quantity", {
          position: "top-right",
        });
        localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success("Added To Cart", {
          position: "top-right",
        });
        localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
      toast.error("Item Removed", {
        position: "top-right",
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased Quantity", {
          position: "top-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("Item Removed", {
          position: "top-right",
        });
      }
      localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      toast.error("Cart Cleared", {
        position: "top-right",
      });
      localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },

    paymentDone(state, action) {
      state.cartTotalQuantity = 0;
      state.cartItems = [];
      localStorage.setItem("Cart Items", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  paymentDone,
} = cartSlice.actions;

export default cartSlice.reducer;

// console.log(itemIndex, action.payload.id);
// toast.success(`${action.payload.title} Added To Cart`, {
//   position: "bottom-left",
// });
