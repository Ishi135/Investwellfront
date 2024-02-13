import React, { useState } from 'react';
import icon from '../../media/images/download.png';
import logOut from '../../media/images/logout.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className='navbar'>
      <img src={icon} alt='Icon' className='Icon' onClick={toggleNavbar} />
      <ul className={`navList ${showNavbar ? 'show' : ''}`}>
        <li className='navItem'> <Link className='navLink' to='/home'> Home </Link>{' '} </li>
        <li className='navItem'> <Link className='navLink'>Profile Section</Link>{' '} </li>
        <li className='navItem'> <Link className='navLink' to='/policydoc'> Policy Docs </Link>{' '} </li>
        <li className='navItem'> <Link className='navLink'>Attendance</Link>{' '}</li>
      </ul>
      <img src={logOut} alt='Logout Icon' className='logout'  />
    </div>
  );
};

export default Navbar;