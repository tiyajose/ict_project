import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav1 from './Units/Nav1.jsx';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Userdetails from './Pages/Userdetails.jsx';
import Cart from './Pages/Cart.jsx';
import Registration from './Pages/Registration.jsx';

export default function App() {
  return (
    <div>
      <div>
      <Nav1></Nav1>

      </div>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Userdetails/>} />
          <Route path="/cart" element={<Cart/>} />

         

       </Routes>

      </Container>
      

    </div>
  )
}