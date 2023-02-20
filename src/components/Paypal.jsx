import { CLIENT_ID } from '../config/config'
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ sumTotal, cart, buyer }) => {
  const [success, setSuccess] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState(false);
  const [items, setItems] = useState([])
  const [orderID, setOrderID] = useState(false);
  const navigate = useNavigate()

  // creates a paypal order
  const createOrder = (data, actions) => {

    return actions.order
      .create({
        purchase_units: [
          {
            "items": cart.map((item) => {
              return (
                {
                  "name": item.title,
                  "quantity": item.quantity,
                  "unit_amount": {
                    "currency_code": "USD",
                    "value": item.price,
                  },
                }
              )
            }),
            "amount": {
              "currency_code": "USD",
              "value": sumTotal,
              "breakdown": {
                "item_total": {
                  "currency_code": "USD",
                  "value": sumTotal,
                },
              },
            },
            "shipping": {
              "name": {
                "full_name": buyer.name
              },
              "address": {
                "address_line_1": buyer.address,
                "address_line_2": buyer.apto,
                "admin_area_2": buyer.state,
                "admin_area_1": buyer.country,
                "postal_code": buyer.cp,
                "country_code": "CL"
              },
            }
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      })
      .catch((error) => {
        console.error("PayPal createOrder error:", error);
        setErrorMessage("There was an error processing your payment.");
      });
  }

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const name = details.payer.name.given_name;
      console.log(details.payer)
      setSuccess(true)
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      navigate('/checkout/success')
    }
    if (ErrorMessage) {
      alert('Hubo un error en el pago, intentelo mas tarde')
    }
  }, [success])

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}

export default Paypal