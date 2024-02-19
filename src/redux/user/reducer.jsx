import {
  ADD_TO_CART,
  DECREMENT_PRODUCT,
  DELETE_FROM_CART,
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  INCREMENT_PRODUCT,
  USER_LOGOUT,
} from "./action";

const initialValue = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  loading: false,
  error: null,
  cart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case FETCH_LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case INCREMENT_PRODUCT:
      console.log("action.payload", action.payload);
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, count: product.count + 1 }
            : product
        ),
      };

    case DECREMENT_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload && product.count > 1
            ? { ...product, count: product.count - 1 }
            : product
        ),
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
