import axios from "axios";
import { API_URL } from "../utils/constants";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL.products());
    return response.data.products;
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
};

export const fetchUser = async (username, password) => {
  try {
    const response = await axios.post(
      API_URL.login(),
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.log("Error in login", error.message);
  }
};
