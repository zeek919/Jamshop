import { ADD_TO_CART } from "./types"

export const AddProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
})
