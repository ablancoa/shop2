import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css'

export default function Success() {
  const { state } = useContext(AppContext)
  const { cart, buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h3>Datos del comprador:</h3>
        <div className="Buyer-data">
          <p>{`Name: ${buyer[0].name}`}</p>
          <p>{`Email: ${buyer[0].email}`}</p>
          <p>{`Address: ${buyer[0].address} ${buyer[0].apto} ${buyer[0].city} ${buyer[0].state} ${buyer[0].country}`}</p>
          <p>{`Phone: ${buyer[0].phone}`}</p>
        </div>
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en tres dias</span>
        <div className="Success-map">
          Googe Maps
        </div>
      </div>
    </div>
  )
}
