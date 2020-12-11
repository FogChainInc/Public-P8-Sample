import React, { Fragment } from 'react';

import NavBar from './components/layout/NavBar';
import Login from './components/Login';

import './resources/css/App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Login />
    </Fragment>
  );
}

export default App;
