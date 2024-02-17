import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESSS,
} from "./action";

const initialValue = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload],
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
