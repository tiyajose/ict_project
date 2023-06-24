import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Entered Email:', email);
    console.log('Entered Password:', password);
    // Additional logic or API calls can be performed here
  };

  return (
    <div>
      <Container className='mt-5'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="link-outline-dark">Forgot Password?</Button> <br /><br />
          <Button variant="outline-dark" type="submit">Login</Button> <br /> <br />
          <div>
            <Button variant="link-outline-dark">Don't have an account?</Button> <br /><br />
            <Link to="/register">
              <Button variant="outline-dark">Create Account</Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}
