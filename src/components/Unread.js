import React from 'react'
import DisplayList from './DisplayList'

const Unread = ({bookList, handleDelete, handleUpdate}) => {


  return (
    <DisplayList bookList = {bookList} handleDelete={handleDelete} handleUpdate={handleUpdate} filterType={filterType}/>
  )
}

export default Unread