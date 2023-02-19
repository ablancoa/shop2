import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import { TYPES } from '../actions/shopping';
import '../styles/components/Products.css'

export default function Products() {
  const { state, dispatch } = useContext(AppContext);
  const { products } = state;

  const hanadleAddToCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: [product, 1] })
  }

  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map((product) => (
          <Product key={product.id} product={product} hanadleAddToCart={hanadleAddToCart} />
        ))}
      </div>
    </div>
  )
}
