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

          <><Header isLoggedIn = {true}/><MainContent /></>
    

    </>
  )
}

export default App