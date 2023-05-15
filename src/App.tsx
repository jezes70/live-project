
import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './page/LandingPage/LandingPage';
import ResetPassword from './page/ResetPassword/ResetPassword';
import AboutUs from "./page/AboutUs Page/AboutUs";


export function App() {
  return (

    <>
    <Router>
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route element = {<ResetPassword/>} path="/reset-password"/>
      </Routes>
    </Router>
    </>
  )

}

export default App;
