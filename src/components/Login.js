import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

  console.log(name, email, password);

  return (
    <Fragment>
      <Container>
        <h1 className='mt-4'>Login</h1>
        <h5>Welcome to Prometheus 8 Sample React Application</h5>
        <Form className='my-4'>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              autoComplete='username'
              name='name'
              value={name}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
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

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              autoComplete='new-password'
              name='password'
              value={password}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default Login;
