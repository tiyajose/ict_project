import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
import Container from 'react-bootstrap/esm/Container';
export default function Nav1() {
  return (

    <div>
      <nav class="navbar bg-primary" data-bs-theme="dark">

  <div class="container-fluid">
    <Container>
   <a class="navbar-brand" href="#">BOOKS-STATION</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <Link to="/"  style={{ textDecoration: 'none' }}><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li></Link>
        <Link to="/login"  style={{ textDecoration: 'none' }}><li class="nav-item">
        <a class="nav-link active" aria-current="page" href="login">LOGIN</a>

        </li></Link>
        <Link to="/profile"  style={{ textDecoration: 'none' }}> <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="user">PROFILE</a>

        </li></Link>
       <Link to="/cart"  style={{ textDecoration: 'none' }}> <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="cart">CART</a>

        </li></Link>
       
      </ul>
      
    </div>
    </Container>
  </div>
</nav>
    </div>
  )
}