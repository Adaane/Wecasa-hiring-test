import React from 'react';
import Page from './page'
import { Col } from 'antd';

import CartContainer from "../components/Cart/cartContainer";
import UserAddressContainer from '../components/userAddress/userAddressContainer';


const UserAddressPage = () => {
  return (
    <Page step={1}>
      <div>
        <Col style={{height: '100vh'}}>
          <h3>{'Veuillez entrer votre adresse :'}</h3>
          <UserAddressContainer />
        </Col>
        <Col>
          <CartContainer />
        </Col>
      </div>
    </Page>
  );
};


export default UserAddressPage;