import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/Reset';
import  { SignupPage }  from './page/UserRegistrationPage/userRegistration';
import Forgot from './page/ForgotPassword/Forgot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LandingPage } from './page/LandingPage/LandingPage';
import { LoginPage } from './page/LoginPage/LoginPage';


function App() {
  return (
    <div>
    
    <Router>
      <ToastContainer />
      <Routes>
        <Route element = {<LoginPage/>} path="/login"/>
        <Route element = {<SignupPage/>} path="/register"/>
        <Route element = {<Forgot/>} path="/forgot-password"/>
        <Route element = {<ResetPassword/>} path="/reset-password"/>
        <Route path="/" element ={<LandingPage />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

