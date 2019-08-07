import { combineReducers } from 'redux'

import prestations from "./prestations";
import cart from "./cart";
import user from "./user";
import appointment from "./appointment";
import booking from "./booking";


const prestationsApp = combineReducers({
  prestations,
  cart,
  user,
  appointment,
  booking
})

export default prestationsApp