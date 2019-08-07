import { ADD_TO_CART, REMOVE_TO_CART } from "../../constants/ActionTypes";

const initialState = {
  isFetchingPrestations: false,
  data: {},
  cart: [],
  user: {
    address: ''
  },
  appointment: null,
  booking: {
    sucess: false,
    pending: false,
    error: false
  }
}



const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.prestation]
    case REMOVE_TO_CART:
      return state.reduce((acc, curr) => {
        if (curr.id !== action.prestationId) {
          return [...acc, curr]
        } else return [...acc]
      }, [])
    default:
      return state
  }
}

export default cart
