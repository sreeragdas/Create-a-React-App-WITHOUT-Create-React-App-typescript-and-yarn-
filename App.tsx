import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import { Home } from "./src/components/home/home";
import { Layout } from "./src/components/layout";
const App = () => {

  return (
    <div>
   <Routes>
   <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
   </Routes>
    </div>
  );
};

export default App;