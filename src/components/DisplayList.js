import React from 'react'
import BookCard from './BookCard';
import { useLocation, useNavigate } from 'react-router';


const DisplayList = ({bookList, handleDelete, handleUpdate}) => {

  const location = useLocation().pathname

  const filterType = location.slice(1)
  
  const displayBooks = bookList
  .filter(book => {
    return book.status == filterType
  })
  .map(book => { return <BookCard key={book.id} book={book} handleDelete={handleDelete} handleUpdate={handleUpdate}/>});

  return (
    <div>{displayBooks}</div>
  )
}

export default DisplayList