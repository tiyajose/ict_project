import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
import Container from 'react-bootstrap/esm/Container';
export default function Nav1() {
  return (

    <div>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BOOKS-STATION</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" style={{ textDecoration: 'none' }}>
              <div class="container-md">

                <div class="container-md">

                  <a class="nav-link active" aria-current="page" href="">HOME</a>
                </div>
                </div>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <div class="container-md">

                  <a class="nav-link active" href="#">LOGIN</a> </div>
              </Link>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div class="container-md">

                  <a class="nav-link active" href="#">PROFILE</a>
                </div>
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <div class="container-md">

                  <a class="nav-link active" href="#">CART</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}