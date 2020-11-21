import { applyMiddleware, createStore } from "redux"
import { CardManagementReducer } from "./CardManagment/reducer"
import logger from "redux-logger"

const store = createStore(CardManagementReducer, applyMiddleware(logger))

export default store
