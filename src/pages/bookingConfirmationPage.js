import React from 'react';
import { Col } from 'antd';
import { connect } from 'react-redux'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'



import Page from './page'
import BookingRecapContainer from '../components/BookingRecap/bookingRecapContainer';

const BookingConfirmationPage = ({booking}) => {
  const {success, error } = booking

  const renderSuccessContainer = () =>  (
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
      </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />)

  const renderErrorContainer = () => (
    <Result
      status="500"
      title="500"
      subTitle="
Désolé, Erreur du serveur. Si vous êtes l'administrateur de ce site Web, veuillez lire le journal d'évenement du serveur Web pour en savoir plus."
      extra={<Link to="/step/prestationsList"><Button type="primary">Retourner à la liste des prestations</Button></Link>}
    />)
  
  return (
    <Page step={3}>
      {
        success && !error && renderSuccessContainer() 
      }
      {
        !success && error && renderErrorContainer()
      }
      {
        !success && !error && <Col>
          <p>{'Récapitulatif de la Réservation:'}</p>
          <BookingRecapContainer />
        </Col>
      }
    </Page>
  );
};


const mapStateToProps = state => ({
  booking: state.booking
})


export default connect(
  mapStateToProps
)(BookingConfirmationPage)