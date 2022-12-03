import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookCard = ({book, handleDelete, handleUpdate}) => {

  function onUpdate() {

    
    const newBookObj = {...book, read_status: !book.read_status}

    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookObj)
    })
    .then(response => response.json())
    .then(handleUpdate(newBookObj))
    
  }
  function onDelete() {

    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE"
    })
    .then(handleDelete(book.id))
  }

    
  return (
    <Card  style={{ margin: '2rem', padding: '1em', width:"24rem"}}
    cols={2}>
      <Card.Body>
        <Card.Title> {book.title}</Card.Title>
        <Card.Text>{`By: ${book.author.first_name} ${book.author.last_name} `}</Card.Text>
        <Card.Subtitle style={{fontStyle: 'italic'}}>{book.genre.genre}</Card.Subtitle>
      </Card.Body> 
      <span className='d-flex justify-content-around'>
        <Button onClick={onUpdate}>{book.read_status? "Mark as Unread" : "Mark as Read"}</Button>
        <Button onClick={onDelete}>Delete</Button>
      </span>
    </Card>
  )
}

export default BookCard