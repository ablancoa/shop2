import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='Main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
