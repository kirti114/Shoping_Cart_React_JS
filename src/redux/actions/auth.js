import apiConstants from "../constants/apiConstants";

export const getProductList = user => ({
  type: apiConstants.GET_PRODUCT_LISTS,
  payload: user
});

export const updateProductList = user => ({
  type: apiConstants.UPDATE_PRODUCT_LISTS,
  payload: user
});
