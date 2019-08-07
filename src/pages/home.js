import React from 'react';
// import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <Page>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box" style={{ background: 'grey' }}>
              <Link to="/step/prestationsList">{'Coiffure'}</Link>
            </div>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default Home;