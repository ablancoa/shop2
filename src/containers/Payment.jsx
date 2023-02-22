import React, { useContext } from 'react';
import useGoogleAddress from '../hooks/useGoogleAddress';
import AppContext from '../context/AppContext';
import Paypal from '../components/Paypal';
import Maps from '../components/Maps';
import '../styles/components/Payment.css'

export default function Payment() {

  const { state } = useContext(AppContext);
  const { cart, buyer } = state;
  const address = useGoogleAddress(buyer[0].address, buyer[0].city)

  let total = 0;
  (cart && cart.length > 0) ? cart.map((item) => {
    let quantity = item.quantity;
    let price = item.price;
    total = total + (quantity * price)
    total = Number(Math.round(total + "e+2") + "e-2")
  }) : 0

  return (
    <>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Datos del comprador:</h3>
          {buyer ?
            (
              <div className="Buyer-data">
                <p>{`Name: ${buyer[0].name}`}</p>
                <p>{`Email: ${buyer[0].email}`}</p>
                <p>{`Address: ${buyer[0].address} ${buyer[0].apto} ${buyer[0].city} ${buyer[0].state} ${buyer[0].country}`}</p>
                <p>{`Phone: ${buyer[0].phone}`}</p>
              </div>
            ) : ""}
        </div>
        <div>

          <div className='Payment-sideBar'>
            <h3>Resumen del pedido:</h3>
            {cart.map((item) => (
              <div className="Payment-item" key={item.title}>
                <div className="Payment-element">
                  <h4>{item.title} X {item.quantity}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
            <div className="Payment-button">
              <Paypal sumTotal={total} cart={cart} buyer={buyer[0]} />
            </div>
          </div>
        </div>
      </div>
      {address && <Maps location={address} />}
    </>
  )
}
