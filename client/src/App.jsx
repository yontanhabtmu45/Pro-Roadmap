import { useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import ForgotPassword from "./Pages/ForgotPassword";

import { gapi } from "gapi-script";
import Header from "./components/Header";
import AllRoadmaps from "./Pages/AllRoadmaps";
import About from "./Pages/About";

const clientId =
  "1083223003406-b78mdntufb75hg2srm1uuritag9bcf8f.apps.googleusercontent.com";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/AllRoadmaps" element={<AllRoadmaps />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
