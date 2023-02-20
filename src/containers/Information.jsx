import React, { useRef, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { TYPES } from '../actions/shopping';
import '../styles/components/Information.css'

export default function Information() {
  const { state, dispatch } = useContext(AppContext);
  const form = useRef(null)
  const { cart } = state;
  const navigate = useNavigate()


  const handleSubmit = async () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    try {
      await validationSchema.validate(buyer);
      dispatch({ type: TYPES.ADD_TO_BUYER, payload: buyer })
      navigate('/checkout/payment')
    } catch (err) {
      alert(err)
    }
  }


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='email' placeholder='Correo electronico' name='email' />
            <input type='text' placeholder='Direccion' name='address' />
            <input type='text' placeholder='Apto' name='apto' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='Pais' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Codigo postal' name='cp' />
            <input type='text' placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to={`/checkout`}>
              Regresar
            </Link>

          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit} disabled={cart.length === 0 ? true : false}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title} X {item.quantity}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}


const validationSchema = Yup.object({
  name: Yup.string().required("El campo es obligatorio"),
  email: Yup.string().required("El campo es obligatorio"),
  address: Yup.string().required("El campo es obligatorio"),
  apto: Yup.string().required("El campo es obligatorio"),
  city: Yup.string().required("El campo es obligatorio"),
  country: Yup.string().required("El campo es obligatorio"),
  state: Yup.string().required("El campo es obligatorio"),
  cp: Yup.string().required("El campo es obligatorio"),
  phone: Yup.string().required("El campo es obligatorio"),
})