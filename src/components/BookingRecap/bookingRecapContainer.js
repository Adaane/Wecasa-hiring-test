import React, {useState} from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input, Button, Card, Col, List} from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bookingRequester } from '../../redux/actions'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

const BookingRecapContainer = props => {
  const { cart, address, appointment, bookingRequester } = props

  const handleSubmit = () => {
    const payload = {
      "prestations": cart && cart.reduce((acc, curr) => {
        return [...acc, curr.reference]
      }, []),
      "appointment": appointment.toISOString(),
      address 
    }
    bookingRequester(payload)
  }

  return (
    <>
      <div>
        <Card title="Mon Panier">
      <Card size='small' type="inner" title="Prestations" extra={<a href="#">Modifier</a>}>
        <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.title}</a>}
                  description={`${item.priceCurrency} | ${item.duration}`}
                />
              </List.Item>
            )} />
        </>
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Adresse de la réservation"
        extra={<a href="#">Modifier</a>}
      >
            <p>{address}</p>
      </Card>
            <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Horraire"
        extra={<a href="#">Modifier</a>}
      >
            <p>{moment(appointment && appointment.toString()).format("dddd Do MMMM YYYY, h:mm:ss a")}</p>
      </Card>
      </Card>
        <Col>
        {}
          <Button type={`primary`} onClick={() => handleSubmit()}>
            Confirmer  
          </Button>
        </Col>
      </div>
    </>
  );
};

BookingRecapContainer.propTypes = {
  
};

const mapStateToProps = state => ({
  cart: state.cart,
  address: state.user.address,
  appointment: state.appointment
})


export default connect(
  mapStateToProps,
  { bookingRequester }
)(BookingRecapContainer)
