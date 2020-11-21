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

      //OK Jesli tablica jest pusta
      //  Jesli w tablicy jest szukany produkt
      //  Jesli w tablicy nie ma szukanego produktu
      //  Jesli jest wiele produktow
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

      const removeCurrentSearched = cardsData.filter((val) => {
        return val.name !== name
      })

      const ifExistCondition = () => {
        if (removeCurrentSearched.length > 0) {
          return new Set([...searchForProduct, removeCurrentSearched])
        }

        return new Set([...searchForProduct])
      }

      const removeDuplicate = new Set([
        ...searchForProduct,
        removeCurrentSearched,
      ])
      const finalData = [...searchForProduct]

      console.log("szukany prod", searchForProduct)
      console.log("filtr tablicy", removeCurrentSearched)
      console.log("set", removeDuplicate)
      console.log("wynik", ifExistCondition())
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
