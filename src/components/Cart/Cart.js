import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const { title, currentPrice } = props.course;
  return (
    <div>
      <div className="cart-item">
        <h6>{title}</h6>
        <h6> Price: ${currentPrice}</h6>
      </div>
    </div>
  );
};

export default Cart;