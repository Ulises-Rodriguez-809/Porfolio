import React from 'react';
import { Link } from 'react-router-dom';

export const Brand = () => {
  return (
    <div className='brandContainer'>
      <img src='/img/brandImg/brandImg2.png' alt='brand image' className='brandImg'/>
      <Link to={'/'} className="navbar-brand">Ulises Rodriguez</Link>
    </div>
  )
}
