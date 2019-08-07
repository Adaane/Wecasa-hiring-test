
import { ADD_USER_ADDRESS } from "../../constants/ActionTypes";

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

export default user