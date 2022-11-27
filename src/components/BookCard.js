import React from 'react'

const BookCard = ({book}) => {

  
  
  return (
    <div>
        {book.title}
        {book.author.first_name}
        {book.author.last_name}
        {book.genre.genre}
    </div>
  )
}

export default BookCard