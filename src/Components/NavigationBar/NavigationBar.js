import { Navbar } from 'flowbite-react'
import React from 'react'

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
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
      Token Trading BD
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='mr-6 lg:mr-12'>
    <Navbar.Link
      to="/navbars"
      className='text-xl  cursor-pointer mr-2 lg:mr-4'
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      
      to="/navbars"
      className='text-xl cursor-pointer mr-2 lg:mr-4'
    >
      Buy
    </Navbar.Link>
    <Navbar.Link to="/navbars" className='text-xl cursor-pointer mr-2 lg:mr-4'>
      Sell
    </Navbar.Link>
    <Navbar.Link to="/navbars" className='text-xl cursor-pointer mr-2 lg:mr-4'>
      Login
    </Navbar.Link>
    <Navbar.Link to="/navbars" className='text-xl cursor-pointer mr-2 lg:mr-4'>
      Register
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
   </>
  )
}

export default NavigationBar