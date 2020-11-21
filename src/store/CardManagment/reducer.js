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

      return {
        ...state,
        cardsData: [...cardsData, { name, price }],
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
