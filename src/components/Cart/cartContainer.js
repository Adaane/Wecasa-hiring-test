
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Menu, Popover, Button, Affix, message, List} from 'antd';


const CartContainer = props => {
  const [isVisible, setVisible] = useState(false)

  const {prestations} = props

  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  const content =
    <>
      <List
        itemLayout="horizontal"
        footer={<div style={{display: 'flex'}}>
          <span>Total : </span>
          </div>
        }
        dataSource={prestations}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={`${item.price} | ${item.duration}`}
            />
          </List.Item>
        )} />
    </>


  return (
    <div>
      <Affix offsetBottom={30} style={{ right: 0 }} >
        <Popover
          content={content}
          trigger="click"
          title={`Mon panier ${(prestations.length)}`}
          visible={isVisible}
          onVisibleChange={handleVisibleChange}
        >
          <Button type="primary">Mon Panier {prestations.length ? `(${prestations.length})` : ''}</Button>
        </Popover>
      </Affix>
    </div>
  );
};

CartContainer.propTypes = {
  
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
)(CartContainer)
