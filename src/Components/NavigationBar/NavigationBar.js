import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/logo.svg"
function NavigationBar() {
  return (
   <>
   <Navbar
  fluid={true}
  rounded={true}
   
>
  <Navbar.Brand
   
    to="/navbars"
    className='cursor-pointer ml-4 lg:ml-8'
  >
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
      Token Trading BD
    </span>
  </Navbar.Brand>
  <Navbar.Toggle  />
  <Navbar.Collapse className='mr-6 lg:mr-12'>
    <NavLink  to="/buyToken">
    <Navbar.Link
      className='text-xl cursor-pointer mr-2 lg:mr-4'
    >
      Buy
    </Navbar.Link>
    </NavLink>

    <NavLink to="/sellToken">
    <Navbar.Link  className='text-xl cursor-pointer mr-2 lg:mr-4 '>
      Sell
    </Navbar.Link>
    </NavLink>
    <NavLink to="/login">
    <Navbar.Link  className='text-xl cursor-pointer mr-2 lg:mr-4'>
      Contact Us
    </Navbar.Link>
    </NavLink>

    <NavLink to="/peer2peer">
    <Navbar.Link
      className='text-xl  cursor-pointer mr-2 lg:mr-4'
    >
     Peer2Peer
    </Navbar.Link>
    </NavLink>

    <NavLink to="/totalOrder">
    <Navbar.Link className='text-xl cursor-pointer mr-2 lg:mr-4'>
      Order History
    </Navbar.Link>
    </NavLink>
  </Navbar.Collapse>
</Navbar>
   </>
  )
}

export default NavigationBar