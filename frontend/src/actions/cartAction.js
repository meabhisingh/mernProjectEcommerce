import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";


// ValidateCartItem

const validateCartItem = (product, quantity) => {
  if (!quantity || quantity <= 0) {
    return false;
  }

  if (!product) {
    return false;
  }

  if (
    !product._id ||
    !product.name ||
    typeof product.price !== "number" ||
    !product.images ||
    !product.images[0]?.url ||
    typeof product.Stock !== "number"
  ) {
    return false;
  }

  return true;
};

// Add to Cart

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  const isValid = validateCartItem(data.product, quantity);

  if (!isValid) {
    console.error("Invalid cart item data");
    return;
  }

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
