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
      </Routes>
    </>
  );
}

export default App;
