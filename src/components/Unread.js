import React from 'react'
import DisplayList from './DisplayList'

const Unread = ({bookList, handleDelete, handleUpdate, filterType}) => {
  return (
    <DisplayList bookList = {bookList} handleDelete={handleDelete} handleUpdate={handleUpdate} filterType={filterType}/>
  )
}

export default Unread