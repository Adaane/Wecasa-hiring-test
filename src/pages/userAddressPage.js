import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col, Steps } from 'antd';
import UserAddressContainer from '../components/userAddress/userAddressContainer';

const { Step } = Steps;


function callback(key) {
  console.log(key);
}

const UserAddressPage = props => {
  return (
    <Page>
      <div className="gutter-example">
        <Row gutter={24}>
          <Col>
        <Steps size="small" current={2}>
          <Step title="Prestations" />
          <Step title="Adresse" />
          <Step title="Horraires" />
          <Step title="Confirmation" />
        </Steps>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col>
            {'Veuillez entrer votre adresse :'}
            <UserAddressContainer />
          </Col>
        </Row>
      </div>
    </Page>
  );
};

UserAddressPage.propTypes = {

};

export default UserAddressPage;