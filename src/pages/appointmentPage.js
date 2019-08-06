import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col, Steps } from 'antd';
import AppointmentContainer from '../components/Appointment/appointmentContainer';


const { Step } = Steps;


const AppointmentPage = props => {
  return (
    <Page>
      <div className="gutter-example">
        <Steps size="small" current={0}>
          <Step title="Prestations" />
          <Step title="Adresse" />
          <Step title="Horraires" />
        </Steps>
        <Row gutter={24}>
          <Col>
          {'Choix des dates :'}
          <AppointmentContainer />
          </Col>
        </Row>
      </div>
    </Page>
  );
};

AppointmentPage.propTypes = {

};

export default AppointmentPage;