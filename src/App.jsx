import { useState } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Routes, Route } from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App() {
  return (
    <>

    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
