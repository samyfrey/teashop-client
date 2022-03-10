import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink to='/myaccount' className='nav-link'>My Account</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Explore</NavLink>
    <NavLink to='/community' className='nav-link'>Community</NavLink>
    <NavLink to='/about' className='nav-link'>About</NavLink>
  </>
)

const Header = ({ user }) => (
  <Navbar
    style={{ backgroundColor: '#89C889' }}
    expand='md'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
          TeaBlog

        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {/* {user.username && (
            <span className='navbar-text me-2'>Welcome, {user.username}!</span>
          )} */}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
