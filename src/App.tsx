import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/Reset';
import Forgot from './page/ForgotPassword/Forgot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LandingPage } from './page/LandingPage/LandingPage';


function App() {

  return (
    <>
    <Router>
      <ToastContainer />
      <Routes>
        <Route element = {<Forgot/>} path="/forgot-password"/>
        <Route element = {<ResetPassword/>} path="/reset-password"/>
        <Route path="/" element ={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
