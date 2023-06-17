import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

export default function Product() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book data from the API endpoint
    axios.get('/api/book/:id')
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div>
          <div className='text-center mt-5'>
            <h1>{book.title}</h1>
            <label htmlFor="">By:</label>
            <a href={book.authorLink}>{book.author}</a>
          </div>
          <hr />
          <div className='split-screen align-center'>
            <div className='split-screen__half'>
              <img src={book.image} alt={book.title} width="300" height="400" />
            </div>
            <div className='split-screen__half'>
              <h4>Book: {book.title}</h4>
              <br />
              <h4>Author: {book.author}</h4>
              <br />
              <h4>Category: {book.category}</h4>
              <br />
              <h4>Publishing Year: {book.year}</h4>
              <br />
              <h4>Publisher: {book.publisher}</h4>
            
              <br />
              <h4>Number of pages: {book.pages}</h4>
              <br />
              <h4>Language: {book.language}</h4>
              <hr />
              <h4>Price: Rs. {book.price}</h4>
            </div>
            <hr />
            <button type="button" className="btn btn-secondary btn-lg left:30px">Add to Cart</button>
            <br />
            <br />
            <button type="button" className="btn btn-secondary btn-lg 200px">Buy</button>
            <hr />
          </div>
        </div>
      </Container>
    </div>
  );
}
