import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col, Steps } from 'antd';
import BookingRecapContainer from '../components/BookingRecap/bookingRecapContainer';

const { Step } = Steps;


function callback(key) {
  console.log(key);
}

const BookingConfirmationPage = props => {
  return (
    <Page>
      <div className="gutter-example">
        <Steps size="small" current={3}>
          <Step title="Prestations" />
          <Step title="Adresse" />
          <Step title="Horraires" />
          <Step title="Confirmation" />
        </Steps>
        <Row gutter={24}>
          <Col>
          {'Récapitulatif de la Réservation:'}
          <BookingRecapContainer/>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

BookingConfirmationPage.propTypes = {
  
};

export default BookingConfirmationPage;