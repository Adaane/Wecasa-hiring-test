import {RECEIVE_PRESTATIONS }from "../../constants/ActionTypes";

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

export default prestations