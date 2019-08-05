import { combineReducers } from 'redux'
import { RECEIVE_PRESTATIONS, ADD_TO_CART, REMOVE_TO_CART } from "../constants/ActionTypes";

const initialState = {
  isFetchingPrestations: false,
  data: {},
  cart: []
}


const prestations = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRESTATIONS:
      return {
        data: action.payload,
        isFetchingPrestations: false
      }
    default:
      return state
  }
}

const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.prestation]
    case REMOVE_TO_CART:
      return state.reduce((acc, curr) => {
        if (curr.id !== action.prestationId ) {
          return [...acc, curr]
        } else return [...acc] 
      }, [])
    default:
      return state
  }
}



const prestationsApp = combineReducers({
  prestations,
  cart
})

export default prestationsApp