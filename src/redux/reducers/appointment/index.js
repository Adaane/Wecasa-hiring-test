import { ADD_APPOINTMENT_DATE } from "../../constants/ActionTypes";

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

const appointment = (state = initialState.appointment, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT_DATE:
      return action.appointment
    default:
      return state
  }
}

export default appointment


