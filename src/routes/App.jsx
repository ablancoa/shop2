import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Payment from '../containers/Payment';
import Information from '../containers/Information';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';



const App = () => {
  const initialState = useInitialState()
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      errorElement: (<NotFound />),
      children: [
        {
          path: "/",
          element: (<Home />),
        },
        {
          path: "checkout",
          element: (<Checkout />)
        },
        {
          path: "checkout/payment",
          element: (<Payment />)
        },
        {
          path: "checkout/success",
          element: (<Success />)
        },
        {
          path: "checkout/information",
          element: (<Information />)
        },
      ]
    },

  ]);


  return (
    <AppContext.Provider value={initialState}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App;