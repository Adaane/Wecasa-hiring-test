import React from 'react';
import { Row, Col } from 'antd';
import Page from './page'



const ErrorPageWrapper = () => {
  return (
    <Page>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            {'EERRRROOOORRRRR'}
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default ErrorPageWrapper;