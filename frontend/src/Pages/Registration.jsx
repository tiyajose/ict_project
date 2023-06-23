import React from 'react'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



export default function Registration() {
  const { register, handleSubmit } = useForm();
    const onFormSubmit  = data => console.log(data);
    const onErrors = errors => console.error(errors);
  
  
  return (
    <div>
      <Container className='mt-5'>
      <Form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <Form.Group className="mb-3" >
        <Form.Label type="text" name="fname" {...register('firstname',{ required: "First Name is required" })} id="">First Name</Form.Label>

        <Form.Control placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label type="text" name="lname" {...register('lastname',{ required: "Last Name is required" })} id="" >Last Name</Form.Label>

        <Form.Control placeholder="Enter Second Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label type="email" name="email" {...register('email',{ required: "Email is required" })} id="">Email address</Form.Label>

        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label type="text" name="password" {...register('password',{ required: "Create strong password" })} id="">Create Password</Form.Label>

        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPasswordConfirm">
        <Form.Label type="text" name="cpassword" {...register('confirmpassword',{ required: "Confirm password" })} id="">Confirm Password</Form.Label>

        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Label type="number" name="phone" {...register('phone',{ required: "Phone number is required" })} id="">Phone Number</Form.Label>

        <Form.Control type="number" placeholder="Mobile No." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label type="text" name="address" {...register('address',{ required: "Address is required" })} id="">Address</Form.Label>

        <Form.Control placeholder="Enter Address" />
      </Form.Group>
      <div class="mb-3">
  <label for="formFile" class="form-label">Upload profile image</label>
  <input class="form-control" type="file" name="image" {...register('image',{ required: "Image is required" })} id="formFile"/>
</div>
    </Form>
    <Button variant="outline-dark">Create Account</Button>{' '}
    </Container>
    </div>
  )
}
