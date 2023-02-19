import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { TYPES } from '../actions/shopping';
import '../styles/components/Checkout.css'

export default function Checkout() {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (product, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: product });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: product });
    }
  }

  let total = 0;
  cart.length > 0 ? cart.map((item) => {
    let quantity = item.quantity;
    let price = item.price;
    total = total + (quantity * price)
    total = Number(Math.round(total + "e+2") + "e-2")
  }) : 0

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{`${item.title} x ${item.quantity}`}</h4>
              <span>{item.price}</span>
            </div>
            <button type='button' onClick={() => handleRemoveFromCart(item)}>
              <i className="fa-solid fa-trash-can" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${total}`}</h3>
          <Link to={`/checkout/information`}>
            <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}
