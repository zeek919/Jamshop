import { ADD_TO_CART, CHANGE_MODAL_STATE } from "./types"

const initialState = {
  cardsData: [],
  modalOpen: false,
}

export const CardManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { price, name } = action.payload
      const { cardsData } = state

      if (!cardsData.length)
        return {
          ...state,
          cardsData: [{ price, name, count: 1 }],
        }

      const searchForProduct = cardsData.map((product) => {
        if (product.name === name)
          return {
            ...product,
            count: product.count + 1,
          }

        return {
          price,
          name,
          count: 1,
        }
      })

      return {
        ...state,
        cardsData: [...searchForProduct],
      }
    }
    case CHANGE_MODAL_STATE: {
      return {
        ...state,
        modalOpen: !state.modalOpen,
      }
    }
    default: {
      return { ...initialState }
    }
  }
}
