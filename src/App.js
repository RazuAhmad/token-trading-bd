import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import BuyForm from './Components/BuyForm/BuyForm';
import Footer from './Components/Footer/Footer';
import Introduction from './Components/Introduction/Introduction';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NewsAndMedia from './Components/NewsAndMedia/NewsAndMedia';
import PeerToPeer from './Components/PeerToPeer/PeerToPeer';

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
      <Route path='/peer2peer' element={<PeerToPeer/>} />
      </Routes>
      <NewsAndMedia/>
      <Footer/>
    </>
  )
}

export default App

