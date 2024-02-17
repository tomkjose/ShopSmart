export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESSS = "FETCH_PRODUCTS_SUCCESSS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductSuccess = (productDetails) => {
  return {
    type: FETCH_PRODUCTS_SUCCESSS,
    payload: productDetails,
  };
};

export const fetchProductError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};
