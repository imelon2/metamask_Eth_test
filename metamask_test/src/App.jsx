import './App.css';
import react, { useEffect, useRef, useCallback, useState } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home'
// import TestSend from './compoents/TestSend'


function App() {
  return (
    
    <BrowserRouter>
      <div className='App'>
        <div>
          <Link to={'/'}>
            Home
          </Link>
          {/* <Link to={'testSend'}>
            Home
          </Link> */}
        </div>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/testSend' element={<TestSend/>}></Route> */}
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
