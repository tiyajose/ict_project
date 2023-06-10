import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../card.css'
export default function App() {
let books=[
  {
    "id":1,
    "author": "Arundhati Roy",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "The God of Small Things",
    "price": 1958
  },
  {
    "id": 2,
    "author": "Hans Christian Andersen",
    "imageLink": "images/fairy-tales.jpg",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "price": 1836
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  }
  ,
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },
  {
    "id":1,
    "author": "Chinua Achebe",
    "imageLink": "images/things-fall-apart.jpg",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "price": 1958
  },


  
]

  return (
    <div>
    <Container> 
     <h1 className='d-flex justify-content-center mt-3'>BOOKS STATION</h1> 
      <Row>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>

  {books.map((book,index) => (
    <Col sm = {2}  key={index} className="card-pad mt-4">
      <Card className='card-pad'>
        <Card.Img variant="top" src={book.imageLink} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className='he1'>{book.title}</Card.Title>
          <Card.Text style={{height :'20 rem'}}>
            {book.author} <br />
            {book.price}
            </Card.Text>
          <Button variant="primary" href='/product'>Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>

    </div>
  )
}
