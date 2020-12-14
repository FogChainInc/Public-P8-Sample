import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = () => {
  const [{ name, email, password }, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChange = (event) => {
    setFormData({
      name,
      email,
      password,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    return <Redirect to='/dash' />;
  };

  return (
    <Fragment>
      <Container>
        <h1 className='mt-4'>Login</h1>
        <h5>Welcome to Prometheus 8 Sample React Application</h5>
        <p>Please Login to continue</p>
        <Form className='my-4'>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              id='name'
              type='name'
              placeholder='Enter name'
              autoComplete='username'
              name='name'
              value={name}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id='email'
              type='email'
              placeholder='Enter email address'
              autoComplete='email'
              name='email'
              value={email}
              onChange={(event) => onChange(event)}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id='password'
              type='password'
              placeholder='Enter password'
              autoComplete='new-password'
              name='password'
              value={password}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Link
            to='/dash'
            id='login'
            className='btn btn-primary'
            onClick={handleSubmit}>
            Login
          </Link>
        </Form>
      </Container>
    </Fragment>
  );
};

export default Login;
