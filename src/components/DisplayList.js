import React from 'react'
import BookCard from './BookCard';
import { useLocation } from 'react-router';

const DisplayList = ({bookList, handleDelete, handleUpdate, filterType}) => {

  const location = useLocation().pathname
  
  const displayBooks = bookList
  .filter(book => {
    if (location === "/unread") {
      if (book.read_status === false) {
        return book
      }
    } else if (location === "/read") {
      if (book.read_status === true) {
        return book
      }
    }
  })
  .map(book => { return <BookCard key={book.id} book={book} handleDelete={handleDelete} handleUpdate={handleUpdate}/>});

  return (
    <div>{displayBooks}</div>
  )
}

export default DisplayList