import React from 'react';
import { Link } from 'react-router-dom';
import todoapplogo from '../todoapplogo.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={todoapplogo} alt='Focus360' className='header--logo' />
      </Link>
      <div className='header__list'>
        <Link className='header--link-home' to='/'>
          Home
        </Link>
        <Link className='header--link-about' to='/about'>
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
