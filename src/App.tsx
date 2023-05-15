import React from "react";
import { Container, Button, Title, Count } from "./style";
import MyComponent from "./Context/Context";

import { Routes,BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./page/AboutUs Page/AboutUs";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );

 
}

export default App;
