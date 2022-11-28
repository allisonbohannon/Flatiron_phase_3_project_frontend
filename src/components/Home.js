import React from 'react'
import AddNewForm from './AddNewForm'
import DisplayList from './DisplayList'

const Home = ( {bookList, handleAdd, handleUpdate, handleDelete} ) => {


  return (
    <div>
      <AddNewForm handleAdd={handleAdd}/>
      <DisplayList bookList = {bookList} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default Home