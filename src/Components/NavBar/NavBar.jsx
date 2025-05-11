import React from 'react'
import './NavBar.css'
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

function NavBar() {
  return (
    <div>
        <Navbar className="NavBar-fondo">

            <div className="d-flex w-100 justify-content-between align-items-center">
        <Navbar.Brand href="#home">
            <img
             src="/src/Components/Assets/logo.jpg"
              className="logo-navbar d-inline-block align-top"
              alt="LAB logo"
            />
          </Navbar.Brand>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-btn">
              <FaSearch />
            </Button>
          </Form>

            </div>
       
      </Navbar>
    </div>
  )
}

export default NavBar
