import React from 'react';
import { Col } from 'antd';

import Page from './page'
import CartContainer from "../components/Cart/cartContainer";
import AppointmentContainer from '../components/Appointment/appointmentContainer';


const AppointmentPage = () => (
    <Page step={2}>
      <Col style={{ height: '100vh' }}>
        <p>{'Choix des dates :'}</p>
        <AppointmentContainer />
      </Col>
      <Col>
        <CartContainer />
      </Col>
    </Page>
  )

export default AppointmentPage;