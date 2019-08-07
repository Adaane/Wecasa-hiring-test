import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, List} from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'


import { bookingRequester } from '../../redux/actions'

const BookingRecapContainer = ({ cart, address, appointment, bookingRequester }) => {

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
          <Card size='small' 
            type="inner"
            title="Prestation(s)"
            extra={<Link to={"/step/prestationsList"}><Button type="link">Modifier</Button></Link>}>
          <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
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
          extra={<Link to={"/step/user-address"}><Button type="link">Modifier</Button></Link>}>
          <p>{address}</p>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Horraire"
          extra={<Link to={"/step/appointment"}><Button type="link">Modifier</Button></Link>}>
            <p>{moment(appointment && appointment.toString()).format("dddd Do MMMM YYYY, h:mm:ss a")}</p>
        </Card>
      </Card>
      <Col>
      {
        cart && cart.length > 0 && appointment && address &&
        <Button type={`primary`} onClick={() => handleSubmit()}>
          {'Confirmer'}
        </Button>
      }
      </Col>
      </div>
    </>
  );
};

BookingRecapContainer.propTypes = {
  cart: PropTypes.array,
  address: PropTypes.array,
  appointment: PropTypes.array,
  bookingRequester: PropTypes.func.isRequired
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
