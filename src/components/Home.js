import React from 'react'
import AddNewForm from './AddNewForm'
import DisplayList from './DisplayList'

const Home = ( {bookList, handleAdd} ) => {


  return (
    <div>
      <AddNewForm handleAdd={handleAdd}/>
      <DisplayList bookList = {bookList}/>
    </div>
  )
}

export default Home