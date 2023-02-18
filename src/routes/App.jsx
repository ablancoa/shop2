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

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home />),
      // errorElement: (<NotFound />)
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
    }
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}
