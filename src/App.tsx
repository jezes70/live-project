
import React from 'react'
import {Container, Button, Title, Count} from './style'
import MyComponent from './Context/Context';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/ResetPassword';
import AboutUs from "./page/AboutUs Page/AboutUs";
import { LandingPage } from './Component/LandiingPage Component/LandingPage';

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
