import React from 'react'
import {Container, Button, Title, Count} from './style'
import MyComponent from './Context/Context';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ResetPassword from './page/ResetPassword/ResetPassword';
import { Registration } from "./page/UserRegistration Page/userRegistration";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<ResetPassword/>} path="/reset-password"/>
        <Route element={<Registration />} path="/register" />
      </Routes>
    </Router>
    </>
  )
}

export default App;
