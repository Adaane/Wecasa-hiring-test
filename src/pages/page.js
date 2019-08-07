import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Steps, Row } from 'antd';


const { Sider, Content } = Layout;
const { Step } = Steps;


const Page = ({ children, step }) => {
    return (<Layout>
      <Sider trigger={null} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
      <div className="logo" style={{
        height: '32px',
        margin:'16px',
        color: 'white'
      }}>test</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span className="nav-text">{'Réserver'}</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">{'Historique'}</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            <span className="nav-text">{'Mon compte'}</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff'}}>
            { step !== undefined ?
              <Steps size="small" current={step} style={{ width: '100%' }}>
                <Step title="Prestations" />
                <Step title="Adresse" />
                <Step title="Rendez-vous" />
                <Step title="Confirmation" />
              </Steps> : ''
            }
            <Row gutter={24} style={{padding: 20, height: '100vH'}}>
            {children}
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )};

Page.propTypes = {
  children: PropTypes.any.isRequired,
  step: PropTypes.any
}


export default Page;