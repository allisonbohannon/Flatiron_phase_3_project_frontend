import React from 'react'
import DisplayList from './DisplayList'
import { useEffect } from 'react'

const CompletedReads = ({bookList, handleDelete, handleUpdate }) => {
  
  return (
    <DisplayList bookList = {bookList} handleDelete={handleDelete} handleUpdate={handleUpdate} />
  )
}

export default CompletedReads