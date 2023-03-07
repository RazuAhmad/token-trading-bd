import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import BuyForm from './Components/BuyForm/BuyForm';
import Introduction from './Components/Introduction/Introduction';
import NavigationBar from './Components/NavigationBar/NavigationBar';

import SellForm from './Components/SellForm/SellForm';



const App = () => {
  return (
    <>
     <NavigationBar/>
     <Introduction/>
     
     
      <Routes>
        <Route path='/' element={<SellForm/>} />
      <Route path='/buyToken' element={<BuyForm/>} />
      </Routes>
    </>
  )
}

export default App

