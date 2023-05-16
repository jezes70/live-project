import React from 'react'
import {Container, Button, Title, Count} from './style'
import MyComponent from './Context/Context';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/ResetPassword';
import { LandingPage } from './page/LandingPage/LandingPage';

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
