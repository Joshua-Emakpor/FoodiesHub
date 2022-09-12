import Homepage from "./pages/homepage/homepage"
import React from 'react'
import ShopPage from "./pages/shoppage/shop";
import { Route, Routes } from 'react-router-dom'
import Header from './reusableComponent/header'

function App() {
  return (
    <div className="App"> 
    <div >
      <Header />
    </div>
      <Routes>
        <Route path = '/' element = {<Homepage/>} />
        <Route path = '/shop' element = {<ShopPage/>} />

      </Routes>
    </div>
  );
}

export default App;
