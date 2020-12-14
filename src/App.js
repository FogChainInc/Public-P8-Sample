import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Login from './components/Login';
import Dash from './components/Dash';

import './resources/css/App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dash' component={Dash} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
