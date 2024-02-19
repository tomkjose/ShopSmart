export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = (userDetails) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: userDetails,
  };
};

export const fetchLoginError = (error) => {
  return {
    type: FETCH_LOGIN_ERROR,
    payload: error,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};

export const incrementProduct = (id) => {
  return {
    type: INCREMENT_PRODUCT,
    payload: id,
  };
};

export const decrementProduct = (id) => {
  return {
    type: DECREMENT_PRODUCT,
    payload: id,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
