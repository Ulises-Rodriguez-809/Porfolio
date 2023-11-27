import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../assets/brandImg2.png';

export const Brand = () => {
  return (
    <div className='brandContainer'>
      <img src={brandImg} alt='brand image' className='brandImg'/>
      <Link to={'/'} className="navbar-brand">Ulises Rodriguez</Link>
    </div>
  )
}
