import React from 'react'
import AddNewForm from './AddNewForm'
import DisplayList from './DisplayList'

const Home = ( {bookList} ) => {


  return (
    <div>Home
      <AddNewForm />
      <DisplayList bookList = {bookList}/>
    </div>
  )
}

export default Home