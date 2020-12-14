import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import P8Logo from '../../resources/images/p8-logo.png';

const NavBar = () => {
  return (
    <Fragment>
      <Navbar className='mb-4' bg='light'>
        <img
          alt=''
          src={P8Logo}
          width='50'
          height='50'
          className='d-inline-block align-top mx-2'
        />
        <Link to='/'>
          <Navbar.Brand className='font-weight-bold'>Prometheus 8</Navbar.Brand>
        </Link>
        <Link to='/' className='nav-link text-dark'>
          Home
        </Link>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
