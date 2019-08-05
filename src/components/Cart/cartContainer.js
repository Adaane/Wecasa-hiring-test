
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Menu, Popover, Button, Affix, message, List} from 'antd';
import { Link } from 'react-router-dom'
import { removeToCart } from "../../redux/actions";

const displayCentsToEuro = cents =>
  (cents / 100).toLocaleString("fr", { style: "currency", currency: "EUR" });

const CartContainer = props => {
  const [isVisible, setVisible] = useState(false)

  const { prestations, removeToCart} = props

  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  const onRemove = (item) => {
    removeToCart(item.id)
  }

  const getTotalPrice = () => {
    return displayCentsToEuro(prestations && prestations.reduce((acc, curr) => {
      return acc + curr.priceNumber
    }, 0))
 
  }

  const content =
    <>
      <List
        itemLayout="horizontal"
        footer={<div style={{display: 'flex'}}>
          <span>Total : {getTotalPrice()}</span>
          {
            prestations && prestations.length > 0 && <Link to='/user-address'>Poursuivre</Link>
          }
          </div>
        }
        dataSource={prestations}
        renderItem={item => (
          <List.Item
            actions={[<a onClick={() => onRemove(item)}>Retirer du panier</a>]}
          >
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={`${item.priceCurrency} | ${item.duration}`}
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
  { removeToCart }
)(CartContainer)
