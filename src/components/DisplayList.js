import React from 'react'
import BookCard from './BookCard';

const DisplayList = ({bookList, handleDelete, handleUpdate}) => {

  const displayBooks = bookList.map(book => { return <BookCard key={book.id} book={book} handleDelete={handleDelete} handleUpdate={handleUpdate}/>});

  return (
    <div>{displayBooks}</div>
  )
}

export default DisplayList