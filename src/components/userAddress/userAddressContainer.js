import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input, Button } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUserAddress } from '../../redux/actions';


const API_KEY = "AIzaSyBVB4oxTZoBpcvt3NbYIHQVLqhAmfuaioE"

const UserAddressContainer = props => {

  const [query, setQuery] = useState('')

  let autocomplete = ""

  const { addUserAddress } = props


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
    <>
      <Script url={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
        onLoad={handleScriptLoad}
      /> 
      <Input placeholder="Rechercher une adresse" 
        allowClear 
        onChange={handleChange}
        className="input-field"
        id="autocomplete"
        hintText="Search City"
        value={query}
        type="text" />
      {query && <Link to={'/step/appointment'}>
        <Button type="primary" onClick={() => handleClick()}>Suivant</Button>
        </Link> }
    </>
  );
};

UserAddressContainer.propTypes = {
  
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
  {addUserAddress}
)(UserAddressContainer)