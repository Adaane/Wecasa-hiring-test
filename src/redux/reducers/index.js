import { combineReducers } from 'redux'
import { RECEIVE_PRESTATIONS, ADD_TO_CART, REMOVE_TO_CART, ADD_USER_ADDRESS,
ADD_APPOINTMENT_DATE
} from "../constants/ActionTypes";

const initialState = {
  isFetchingPrestations: false,
  data: {},
  cart: [],
  user:{
    address: ''
  },
  appointment: null
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

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS:
      return {
        address: action.userAddress
      }
    default:
      return state
  }
}

const appointment = (state = initialState.appointment, action) => {
    switch (action.type) {
    case ADD_APPOINTMENT_DATE:
      return action.appointment
    default:
      return state
  }
}




const prestationsApp = combineReducers({
  prestations,
  cart,
  user,
  appointment
})

export default prestationsApp