import API from "../constants/api";
import axios from "axios";

export async function getProductList(user) {
  const response = await axios.get("https://fakestoreapi.com/products").then(res => res);
  return response;
}

export function updateProductList(data) {
  return data;
}