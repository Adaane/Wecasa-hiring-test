import { BOOKING_REQUEST,
  BOOKING_REQUEST_SUCCESS,
  BOOKING_REQUEST_ERROR
} from "../../constants/ActionTypes";

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


const booking = (state = initialState.booking, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { ...state, pending: true }
    case BOOKING_REQUEST_SUCCESS:
      return { ...state, pending: false, sucess: true }
    case BOOKING_REQUEST_ERROR:
      return { ...state, pending: false, error: true }
    default:
      return state
  }
}

export default booking
