import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import { About } from "./src/components/about/About";
import { Home } from "./src/components/home/home";
import { Layout } from "./src/components/layout";
const App = () => {

  return (
  
   <Routes>
   <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          </Route>
   </Routes>
   
  );
};

export default App;