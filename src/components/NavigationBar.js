import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar  bg="light">
    <Nav defaultActiveKey="home">
      <Nav.Item>
        <Nav.Link 
          as={Link}
          to="/"
          eventKey="home"
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/search_by_author"
          eventKey="search_by_author"
        >
          Search By Author
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/search_by_genre"
          eventKey="search_by_genre"
        >
          Seach by Genre
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/completed_reads"
          eventKey="completed_reads"
        >
          Completed Reads
        </Nav.Link>
      </Nav.Item>
  </Nav>
</Navbar>
  )
}

export default NavigationBar