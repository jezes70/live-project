import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './page/LandingPage/LandingPage';
import ResetPassword from './page/ResetPassword/ResetPassword';

function App() {

  return (
    <>
    <Router>
      <Routes>
       <Route element = {<LandingPage/>} path="/"/>
        <Route element = {<ResetPassword/>} path="/reset-password"/>
      </Routes>
    </Router>
    </>
  )
}

export default App
