import React from 'react'
import {Container, Button, Title, Count} from './style'
import MyComponent from './Context/Context';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/Reset';
import Forgot from './page/ForgotPassword/Forgot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <Router>
      <ToastContainer />
      <Routes>
        <Route element = {<Forgot/>} path="/forgot-password"/>
        <Route element = {<ResetPassword/>} path="/reset-password"/>
      </Routes>
    </Router>
    </>
  )
}

export default App
