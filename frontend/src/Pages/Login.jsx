import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function Login() {
  return (
    <div>
      <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="link-outline-dark" >Forgot Password?</Button> <br /><br />
      </Form>
      <Button variant="outline-dark">Login</Button>{' '} <br /> <br />
      <div>
      <Link to="/register">
        <Button variant="outline-dark" >Create Account</Button>
      </Link>
      </div>
      </Container>
    </div>
  )
}
