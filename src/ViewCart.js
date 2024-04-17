// ViewCart.js
import React from 'react';

const ViewCart = ({ cart, removeFromCart }) => {
  return (
    <div className="view-cart">
      <h2>My Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item">
            <div>{item.name}</div>
            <div>Price: {item.price}</div>
            <button onClick={() => removeFromCart(item)} className="btn btn-danger">Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
};

export default ViewCart;
