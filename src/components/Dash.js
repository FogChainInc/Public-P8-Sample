import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Dash = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1 id='welcomeUser'>Hello World!</h1>
        <p id='description'>
          Thank you for using Prometheus 8 Sample React Application
        </p>
      </Jumbotron>
    </Fragment>
  );
};

export default Dash;
