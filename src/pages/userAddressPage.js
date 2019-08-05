import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col } from 'antd';
import PrestationsContainer from '../components/Prestations/prestationsContainer';
import CartContainer from "../components/Cart/cartContainer";

function callback(key) {
  console.log(key);
}

const UserAddressPage = props => {
  return (
    <Page>
      <div className="gutter-example">
        <Row gutter={24}>
          <Col>
            {'Veuillez entrer votre adresse :'}
            {/* <UserAddressContainer /> */}
          </Col>
        </Row>
      </div>
    </Page>
  );
};

UserAddressPage.propTypes = {

};

export default UserAddressPage;