import React from 'react';
import leaf from '../static/foglia-sagoma.png';
// import { FiArrowDownCircle } from 'react-icons/fi';
import CustomButton from './common/CustomButton';
import { HashLink } from 'react-router-hash-link';

export default function Landing(props) {
  return (
    <div className='landing'>
      <div className='title-container'>
        <div className='title'>
          <img src={leaf} className='leaf-up' alt='' />
          <h1 className='logo'>Chef Forti</h1>
          <img src={leaf} className='leaf-down' alt='' />
          <h2>Cucina a domicilio</h2>
          <h2>Personal home chef</h2>
        </div>
      </div>
      <div className='image-container' />
      <div className='scroll-button'>
        <HashLink smooth to='/#menu'>
          <CustomButton content='Scopri i menu' className='padded' onClick={() => {}} />
        </HashLink>
      </div>
    </div>
  );
}
