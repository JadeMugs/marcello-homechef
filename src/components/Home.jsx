import React from 'react';
import Contacts from './Contacts';
import Footer from './Footer';
import Landing from './Landing';
import Menu from './Menu';
import Navbar from './Navbar';
import Products from './Products';
import About from './About';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div id='menu'>
        <Menu />
      </div>
      <div id='products'>
        <Products />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='contacts'>
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
