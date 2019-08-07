import React from 'react';
import { Row, Col } from 'antd';

import Page from './page'
import PrestationsContainer from '../components/Prestations/prestationsContainer';
import CartContainer from "../components/Cart/cartContainer";


const PrestationsPage = () => {
  return (
    <Page step={0}>
      <Row gutter={24}>
        <Col>
          <PrestationsContainer/>
          <CartContainer />
        </Col>
      </Row>
    </Page>
  );
};


export default PrestationsPage;