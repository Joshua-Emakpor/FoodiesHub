import Homepage from "./frontend/pages/homepage/homepage"
import React from 'react'
import ShopPage from "./frontend/pages/shoppage/shop";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Homepage/>} />
        <Route path = '/shop' element = {<ShopPage/>} />

      </Routes>
    </div>
  );
}

export default App;
