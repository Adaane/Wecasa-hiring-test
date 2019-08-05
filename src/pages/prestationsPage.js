import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col } from 'antd';
import PrestationsContainer from '../components/Prestations/prestationsContainer';
import CartContainer from "../components/Cart/cartContainer";

function callback(key) {
  console.log(key);
}

const PrestationsPage = props => {
  return (
    <Page>
      <div className="gutter-example">
        <Row gutter={24}>
          <Col>
          {'Choix des prestations :'}
            <PrestationsContainer/>
          </Col>
          <Col>
            <CartContainer />
          </Col>
        </Row>
      </div>
    </Page>
  );
};

PrestationsPage.propTypes = {
  
};

export default PrestationsPage;