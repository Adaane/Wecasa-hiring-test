import { getUniverse } from '../../api'
import * as types from '../constants/ActionTypes'


export const fetchAllPrestations = () => dispatch => {
  getUniverse()
  .then(data => 
    { 
      dispatch(receivePrestations(data))
  }).catch(error => {
      dispatch(requestPrestationsError(error));
  });
}

const receivePrestations = payload => ({
    type: types.RECEIVE_PRESTATIONS,
    payload
  })

export const requestPrestationsError = () => ({
    type: types.REQUEST_PRESTATIONS_ERROR
});

//ADDTOCART

export const addToCart = prestation => ({
  type: types.ADD_TO_CART,
  prestation
})

//REMOVETOCART
export const removeToCart = prestationId => ({
  type: types.REMOVE_TO_CART,
  prestationId
})

//ADDRESS

export const addUserAddress = userAddress => ({
    type: types.ADD_USER_ADDRESS,
    userAddress
})

//APPOINTEMENT
export const addAppointmentDate = appointment => ({
  type: types.ADD_APPOINTMENT_DATE,
  appointment
})


