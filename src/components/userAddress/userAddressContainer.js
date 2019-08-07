import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import UserAdressInput from "./userAdressInput";
import { addUserAddress } from '../../redux/actions';

const UserAddressContainer = props => {

  const [query, setQuery] = useState('')
  const { addUserAddress } = props

  let autocomplete = ""


  const handleScriptLoad = () => {
    // Declare Options For Autocomplete 

    // Initialize Google Autocomplete 
    /*global google*/
    autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'));
    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed',
      handlePlaceSelect);
  }

  const handlePlaceSelect = () => {
    let addressObject = autocomplete.getPlace();    
    setQuery(addressObject.formatted_address)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = () => (
    addUserAddress(query)
  )

  return (
    <UserAdressInput onScriptLoad={handleScriptLoad}
      onInputChange={handleChange}
      onBtnClick={handleClick}
      query={query}
    />
  );
};

UserAddressContainer.propTypes = {
  addUserAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
  {addUserAddress}
)(UserAddressContainer)