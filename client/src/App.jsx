import { useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Routes, Route } from "react-router-dom";

import Home from "./markup/Pages/Home";
import Register from "./markup/Pages/Register";
import Login from "./markup/Pages/Login";
import ForgotPassword from "./markup/Pages/ForgotPassword";

import { gapi } from "gapi-script";
import Header from "./markup/components/Header";
import AllRoadmaps from "./markup/Pages/AllRoadmaps";
import About from "./markup/Pages/About";
import AddAdmin from "./markup/Pages/admin/AddAdmin";

const clientId =
  "1083223003406-b78mdntufb75hg2srm1uuritag9bcf8f.apps.googleusercontent.com";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/AllRoadmaps" element={<AllRoadmaps />} />
        <Route path="/About" element={<About />} />
        <Route path="/admin" element={<AddAdmin />} />
      </Routes>
    </>
  );
}

export default App;
