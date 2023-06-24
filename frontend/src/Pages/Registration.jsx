import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Registration() {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="fname"
              type="text"
              placeholder="Enter First Name"
              {...register('firstname', { required: 'First Name is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lname"
              type="text"
              placeholder="Enter Last Name"
              {...register('lastname', { required: 'Last Name is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email"
              type="email"
              placeholder="Enter email"
              {...register('email', { required: 'Email is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control name="password"
              type="password"
              placeholder="Enter Password"
              {...register('password', { required: 'Create strong password' })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="cpassword"
              type="password"
              placeholder="Confirm Password"
              {...register('confirmpassword', { required: 'Confirm password' })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control name="phone"
              type="number"
              placeholder="Mobile No."
              {...register('phone', { required: 'Phone number is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address"
              placeholder="Enter Address"
              {...register('address', { required: 'Address is required' })}
            />
          </Form.Group>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload profile image
            </label>
            <input
              className="form-control"
              type="file"
              {...register('image', { required: 'Image is required' })}
              id="formFile"
            />
          </div>
          <Button variant="outline-dark" type="submit">
            Create Account
          </Button>
        </Form>
      </Container>
    </div>
  );
}
