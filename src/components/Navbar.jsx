import React from 'react';
import logo from '../static/logo-font.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="orizontal-menu">
        <ul>
          <li>
            <a href="#home">Su di me</a>
          </li>
          <li>
            <a href="#news">Menu</a>
          </li>
          <li>
            <a href="#contact">Contatti</a>
          </li>
          <li>
            <a href="#about">Prodotti</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
