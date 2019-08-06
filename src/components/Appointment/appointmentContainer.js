import React, {useState} from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input, Button } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addAppointmentDate} from '../../redux/actions'
import "react-datepicker/dist/react-datepicker.css";


const CustomInput = props => {

 
  return (
    <Button
      className="example-custom-input"
      onClick={props.onClick}>
      {props.value ? props.value : "Séléctionner une date"}
    </Button>
  )
}

const AppointmentContainer = props => {
   const {addAppointmentDate} = props
  const [startDate, setStartDate] = useState(null)

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleClick = () => {
    addAppointmentDate(startDate)
  }

  return (
    <>
    <div>
      <DatePicker
        customInput={<CustomInput/>}
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="dd MMMM yyyy h:mm aa"
        placeholderText="Choisir une date"
        todayButton={"Aujourd'hui"}
        minDate={new Date()}
        />
    </div>
    {
      startDate && <Button type="primary" onClick={() => handleClick()}>
      {"Suivant"}
    </Button>
    }

    </>
  );
};

AppointmentContainer.propTypes = {
  
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
  {addAppointmentDate}
)(AppointmentContainer)