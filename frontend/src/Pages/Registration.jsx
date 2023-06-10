import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function Registration() {
  return (
    <div>
      <Container>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Second Name</Form.Label>
        <Form.Control placeholder="Enter Second Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Mobile No." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Enter Address" />
      </Form.Group>
    </Form>
    <Button variant="outline-primary">Create Account</Button>{' '}
    </Container>
    </div>
  )
}
