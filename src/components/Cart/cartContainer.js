
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Popover, Button, Affix} from 'antd';
import { removeToCart } from "../../redux/actions";
import CartList from "./cartList";

const CartContainer = ({ prestations, removeToCart }) => {

  const [isVisible, setVisible] = useState(false)

  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  const onRemove = (item) => {
    removeToCart(item.id)
  }

  const content = <CartList list={prestations} onRemovePrestation={onRemove}/>

  return (
    <div>
      <Affix offsetBottom={30} style={{ right: 0 }} >
        <Popover
          content={content}
          trigger="click"
          title={`Mon panier : ${(prestations.length)} élément(s)`}
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
  prestations: PropTypes.array.isRequired,
  removeToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  prestations: state.cart
})


export default connect(
  mapStateToProps,
  { removeToCart }
)(CartContainer)
