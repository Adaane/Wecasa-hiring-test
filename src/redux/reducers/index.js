import { combineReducers } from 'redux'
import { RECEIVE_PRESTATIONS } from "../constants/ActionTypes";

const initialState = {
  isFetchingPrestations: false,
  data: {}
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

const prestationsApp = combineReducers({
  prestations
})

export default prestationsApp