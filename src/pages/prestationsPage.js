import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col, Steps } from 'antd';
import PrestationsContainer from '../components/Prestations/prestationsContainer';
import CartContainer from "../components/Cart/cartContainer";

const { Step } = Steps;


function callback(key) {
  console.log(key);
}

const PrestationsPage = props => {
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