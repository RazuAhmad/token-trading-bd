import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import AdminPanel from './Components/AdminPanel/AdminPanel';
import BuyForm from './Components/BuyForm/BuyForm';
import Introduction from './Components/Introduction/Introduction';
import LatestExchanges from './Components/LatestExchanges/LatestExchanges';
import NavigationBar from './Components/NavigationBar/NavigationBar';

import SellForm from './Components/SellForm/SellForm';



const App = () => {
  return (
    <>
     <NavigationBar/>
     <Introduction/>
     
     
      <Routes>
        <Route path='/' element={<SellForm/>} />
        <Route path='/sellToken' element={<SellForm/>} />
      <Route path='/buyToken' element={<BuyForm/>} />
      </Routes>
      <AdminPanel/>
    </>
  )
}

export default App

