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
    "id": 1,
    "author": "Chinua Achebe",
    "imageLink": "https://i0.wp.com/www.raptisrarebooks.com/images/179534/things-fall-apart-chinua-achebe-first-edition-signed-1959-rare-review.jpg?fit=1250%2C1000&ssl=1",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "price": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "id": 2,
    "author": "Hans Christian Andersen",
    "imageLink": "https://www.madrasshoppe.com/43553-large_default/hans-christian-andersen-s-fairy-tales-puffin-classics-3-edition-12-march-2010-andersen-hans-christian.jpg",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "price": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "id": 3,
    "author": "Dante Alighieri",
    "imageLink": "https://prodimage.images-bn.com/pimages/9781435162068_p0_v2_s1200x630.jpg",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "price": 928,
    "title": "The Divine Comedy",
    "year": 1315
  }
  ,
  {
    "id": 4,
    "author": "Jane Austen",
    "country": "United Kingdom",
    "imageLink": "https://m.media-amazon.com/images/I/41Ljst4s4rS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "price": 226,
    "title": "Pride and Prejudice",
    "year": 1813
  },
  {
    "id": 5,

    "author": "Perumbadavam Sreedharan ",
    "country": "India",
    "imageLink": "https://s03.sgp1.cdn.digitaloceanspaces.com/sites/31/posts/220/vwrtfebxas1594903041.webp",
    "language": "Malayalam",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "price": 223,
    "title": "Oru Sankeerthanam Pole    ",
    "year": 1993
  },
  {
    "id": 6,
    "author": "S.K Pottekkatt",
    "country": "India",
    "imageLink": "https://www.pusthakakada.com/wp-content/uploads/2022/05/indoneshyan_diary.jpg",
    "language": "Malayalam, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "price": 312,
    "title": "Indoneshyan Diary",
    "year": 1990
  },
  {
    "id": 7,
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "imageLink": "https://d3525k1ryd2155.cloudfront.net/h/744/514/1349514744.0.x.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
    "price": 1024,
    "title": "The Decameron",
    "year": 1351
  },
  {
    "id": 8,
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHGIx3bmxHK9izgNoFwpKT7Yp6xAKh8-xOt49N4Tf_w8NzXyp7DyZo4_2XiRl7T1abb8&usqp=CAU",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Ficciones\n",
    "price": 224,
    "title": "Ficciones",
    "year": 1965
  },
  {
    "id": 9,
    "author": " Emily Brontë's",
    "country": "United Kingdom",
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWQboTCJpIIG7V2ziBsmmmZWvYb2W73Z9-KCS7wvlfZiYa6BJPoXEC_y2uokR1wzR6iI&usqp=CAU",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    "price": 342,
    "title": "Wuthering Heights",
    "year": 1847
  },
  {
    "id": 10,
    "author": "Paulo Coelho",
    "country": "Brazil",
    "imageLink": "data:image/jpeg;base64,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",
    "language": "Portuguese",
    "link": "\n",
    "price": 163,
    "title": "The Alchemist",
    "year": 1993
  },
  {
    "id": 11,
    "author": "Geoffrey Chaucer",
    "country": "England",
    "imageLink": "https://picture.graycity.net/img/sarah-courtauld/the_canterbury_tales.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    "price": 544,
    "title": "The Canterbury Tales",
    "year": 1450
  },
  {
    "id": 12,
    "author": "Anton Chekhov",
    "country": "Russia",
    "imageLink": "https://images.penguinrandomhouse.com/cover/9780593312155",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    "price": 194,
    "title": "Kashtanka",
    "year": 1886
  },
  {
    "id": 13,
    "author": "Charles Dickens",
    "country": "United Kingdom",
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLfDglTv5NWotnv1tNJr75QtowWuA_8f56uSzc2igzwoVC7UyaUzIIfwbnWSNAeW6PMI&usqp=CAU",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
    "price": 194,
    "title": "Great Expectations",
    "year": 1861
  },
  {
    "id": 14,
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://m.media-amazon.com/images/I/81S1IAhPVPL.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    "price": 551,
    "title": "Crime and Punishment",
    "year": 1866
  },
  {
    "id": 15,
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4rxDOp3TYa9HnMXglx61on7TYdJqmiKhlQTV24kW8OlJ_hlYiVAa_n9L_KrqOKNMs2A&usqp=CAU",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
    "price": 656,
    "title": "The Idiot",
    "year": 1869
  },
  {
    "id": 16,
    "author": "Gabriel García Márquez",
    "country": "Colombia",
    "imageLink": "https://readhousereview.files.wordpress.com/2021/11/marquez-love-in-the-time-of-cholera.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
    "price": 368,
    "title": "Love in the Time of Cholera",
    "year": 1985
  },

  {
    "id": 17,
    "author": "Marguerite Yourcenar",
    "country": "France/Belgium",
    "imageLink": "https://i.etsystatic.com/14581280/r/il/4f46ee/3163934874/il_1080xN.3163934874_dald.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    "price": 408,
    "title": "Memoirs of Hadrian",
    "year": 1951
  },
  {
    "id": 18,
    "author": "Ralph Ellison",
  "country": "United States",
  "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgt-jamjUwBwtvzk5FzJbUDYbxNDqlb_rfx0aZJvEkNxyHtjNs8uxNuw21ijlpxGBSyL4&usqp=CAU",
  "language": "English",
  "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
  "price": 581,
  "title": "Invisible Man",
  "year": 1952
  },
  {
    "id": 19,
    "author": "Leo Tolstoy",
    "country": "Russia",
    "imageLink": "https://images.squarespace-cdn.com/content/v1/5a44280432601e14c4a69783/1557411103181-HL3N63QX4F3AGFV5BUR8/War%2Band%2BPeace%2BCover?format=1000w",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
    "price": 1296,
    "title": "War and Peace",
    "year": 1867
  },
  {
    "id": 20,
    "author": "William Shakespeare",
    "country": "England",
    "imageLink": "https://m.media-amazon.com/images/I/41sKQs7JqxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/King_Lear\n",
    "price": 384,
    "title": "King Lear",
    "year": 1608
  },
  {
    "id": 21,
    "author": "Vladimir Nabokov",
    "country": "Russia/United States",
    "imageLink": "https://m.media-amazon.com/images/I/41IGrnOskvL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Lolita\n",
    "price": 317,
    "title": "Lolita",
    "year": 1955
  }
 
]

  return (
    <div>
    <Container> 
    <b> <h1 className='d-flex justify-content-center mt-3'>BOOKS STATION</h1> </b>
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
            {book.author} <br/>
            Rs.{book.price}
            </Card.Text>
          <Button variant="primary" href='/product'>View</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>

    </div>
  )
}
