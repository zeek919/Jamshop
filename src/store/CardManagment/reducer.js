import { ADD_TO_CART, CHANGE_MODAL_STATE } from "./types"

const initialState = {
  cardsData: [],
  modalOpen: false,
}

export const CardManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cardsData: [...state.cardsData, action.payload],
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
