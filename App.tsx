import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import { Layout } from "./src/components/layout";
const App = () => {

  return (
    <div>
   <Routes>
     <Route path='/' element={<Layout/>}/>
   </Routes>
    </div>
  );
};

export default App;