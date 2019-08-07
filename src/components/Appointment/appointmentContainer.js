import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'antd';

import CustomInput from "./customInput"
import {addAppointmentDate} from '../../redux/actions'


const AppointmentContainer = props => {
  const [startDate, setStartDate] = useState(null)
  const { addAppointmentDate } = props

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleClick = () => {
    addAppointmentDate(startDate)
  }

  return (
    <>
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
      {
        startDate && 
        <div style={{'marginTop': 20}}>
          <Link to="/step/bookingConfirmation">
            <Button type="primary" onClick={() => handleClick()}>
              {"Suivant"}
            </Button>
          </Link>
        </div>
      }
    </>
  );
};

AppointmentContainer.propTypes = {
  addAppointmentDate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
  {addAppointmentDate}
)(AppointmentContainer)