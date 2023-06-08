import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
export default function Nav1() {
  return (

    <div>
      <nav class="navbar bg-primary" data-bs-theme="dark">

  <div class="container-fluid">
   <a class="navbar-brand" href="#">BOOKS-STATION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to="/"><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li></Link>
        <Link to="/login"><li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Login</a>

        </li></Link>
        <Link to="/user"> <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">User</a>

        </li></Link>
       <Link to="/cart"> <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Cart</a>

        </li></Link>
       
      </ul>
    </div>
  </div>
</nav>
      <hr />
    </div>
  )
}