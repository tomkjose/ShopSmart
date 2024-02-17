import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./user/reducer";
import { productReducer } from "./products/reducer";
import { thunk } from "redux-thunk";

const combinedStore = combineReducers({
  user: userReducer,
  products: productReducer,
});

export const store = createStore(combinedStore, applyMiddleware(thunk));
