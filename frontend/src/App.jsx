import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from "./Header"
import MainContent from "./MainContent"
import LandingPage from './LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<><Header isLoggedIn = {false}/><LandingPage/><Register/></>}></Route>
          <Route path='/login' element={<><Header isLoggedIn = {false}/><Login /></>}></Route>
          <Route path='/register' element={<><Header isLoggedIn = {false}/><Register/></>}></Route>
          <Route path='/home' element={<><Header isLoggedIn = {true}/><MainContent /></>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App