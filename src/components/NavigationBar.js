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
          to="/read"
          eventKey="completed_reads"
        >
          Completed Reads
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/unread"
          eventKey="unreads"
        >
          Need to Read
        </Nav.Link>
      </Nav.Item>
  </Nav>
</Navbar>
  )
}

export default NavigationBar