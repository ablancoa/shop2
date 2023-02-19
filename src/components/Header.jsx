import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

export default function Header() {
  const { state } = useContext(AppContext);

  const { cart } = state;
  let total = 0;
  state.cart.map((item) => total = item.quantity + total)

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to={`/`}>
          PlatziConf Merch
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to={`/checkout`}>
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
        <div className='Header-alert'>{total}</div>
      </div>
    </div>
  )
}
