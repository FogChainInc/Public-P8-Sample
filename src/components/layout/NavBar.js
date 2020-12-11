import React, { Fragment } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
        <Navbar.Brand className='font-weight-bold' href='#'>
          Prometheus 8
        </Navbar.Brand>
        <Nav.Link className='text-dark' href='#'>
          Home
        </Nav.Link>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
