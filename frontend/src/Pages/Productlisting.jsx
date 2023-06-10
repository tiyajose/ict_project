import React from 'react'

import Container from 'react-bootstrap/Container';


export default function Product() {
    
  return (
    <div>

      <Container>

        <div >
        
          <div className='text-center mt-5'>
            <h1 >Things Fall Apart </h1>
            <label htmlFor="">By :</label>
            <a href="https://en.wikipedia.org/wiki/Chinua_Achebe" >Chinua Achebe</a>
          </div>
          <hr />
          <div className='split-screen align-center'>
            <div className='split-screen__half'>
              <img src="https://i0.wp.com/www.raptisrarebooks.com/images/179534/things-fall-apart-chinua-achebe-first-edition-signed-1959-rare-review.jpg?fit=1250%2C1000&ssl=1" alt="" width="300" height="400" />
            </div>

            {/* <div className='right '> */}

            <div className='split-screen__half'>

              <h4>Book :</h4>
              <br /><h4>Author :</h4>
              <br /><h4>Category :</h4>
              <br /><h4>ISBN :</h4>
              <br /><h4>Publishing Date :</h4>
              <br /><h4>Publisher :</h4>
              <br /><h4>Edition</h4>
              <br /><h4>Number of pages :</h4>
              <br /><h4>Language :</h4>
              <hr />
              <h4>Price : Rs.209</h4>

            </div>
            <hr />
            <button type="button" class="btn btn-secondary btn-lg left:30px">Add to Cart</button>
            <br />
            <br />
            <button type="button" class="btn btn-secondary btn-lg 200px">Buy</button>
            <hr />
          </div></div>

      </Container>

    </div>
  )
}