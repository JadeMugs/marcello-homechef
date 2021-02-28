import React from 'react';
import Contacts from './Contacts';
import Footer from './Footer';
import Landing from './Landing';
import Menu from './Menu';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Menu id='menu' />
      <Contacts id='contacts' />
      <Footer />
    </div>
  );
}
