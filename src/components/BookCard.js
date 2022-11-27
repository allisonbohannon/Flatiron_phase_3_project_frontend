import React from 'react'
import Card from 'react-bootstrap/Card';

const BookCard = ({book}) => {

  
  
  return (
    <Card  style={{ margin: '2rem', padding: '1em', width:"24rem"}}
    cols={2}>
      <Card.Body>
        <Card.Title> {book.title}</Card.Title>
        <Card.Text>{`By: ${book.author.first_name} ${book.author.last_name} `}</Card.Text>
        <Card.Subtitle>{book.genre.genre}</Card.Subtitle>
      </Card.Body>  
    </Card>
  )
}

export default BookCard