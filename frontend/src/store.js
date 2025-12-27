import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
});

const getValidCartItems = () => {
  try {
    const deta = JSON.parse(localStorage.getItem("cartItems"));

    if (!Array.isArray(deta)) {
      localStorage.removeItem("cartItems");
      return [];
    }

    const validItems = deta.filter((item) => {
      return (
        item.product &&
        typeof item.quantity === "number" &&
        item.quantity > 0 &&
        typeof item.price === "number"
      );
    });

    return validItems;
  } catch (err) {
    return [];
  }
};

const getValidShippingInfo = () => {
  try {
    const deta = JSON.parse(localStorage.getItem("shippingInfo"));

    if (!deta || typeof deta !== "object") {
      localStorage.removeItem("shippingInfo");
      return {};
    }

    return deta;
  } catch (err) {
    return {};
  }
};


let initialState = {
  cart: {
    cartItems: getValidCartItems(),
    shippingInfo: getValidShippingInfo(),
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;