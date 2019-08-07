
import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom'
import { getTotalPrice, getTotalDuration } from "../../utils";


const CartList = props => {

  const { list, onRemovePrestation } = props

  return (
    <List
      itemLayout="horizontal"
      style={{ maxHeight: '300px', overflow: 'auto' }}
      footer={<div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>Durée: {getTotalDuration(list)} | Total : {getTotalPrice(list)}</div>
        {
          list && list.length > 0 && <div style={{display: 'flex', alignItem:'center', 'justifyContent': 'center'}}><Link to='/step/user-address'>Poursuivre</Link></div>
        }
        </div>
      }
      dataSource={list}
      renderItem={item => (
        <List.Item
          actions={[
            <Button type="link" onClick={() => onRemovePrestation(item)}>
              {'Retirer du panier'}
            </Button>]}
        >
          <List.Item.Meta
            title={<a href="https://wecasa.fr">{item.title}</a>}
            description={`${item.priceCurrency} | ${item.duration}`}
          />
        </List.Item>
      )} />
  );
};

CartList.propTypes = {
  list: PropTypes.array.isRequired,
  onRemovePrestation: PropTypes.func.isRequired
};

export default CartList;