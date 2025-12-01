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
import Dashboard from "./markup/components/admin/Dashboard/Dashboard";
import ManageAdmins from "./markup/Pages/admin/ManageAdmins";
import ManageRoadmaps from "./markup/Pages/admin/ManageRoadmaps";
import AddRoadmap from "./markup/Pages/admin/AddRoadmap";
import StepsSettings from "./markup/Pages/admin/StepsSettings";
import AddStep from "./markup/Pages/admin/AddStep";

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
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admins" element={<ManageAdmins />} />
        <Route path="/admin/roadmaps" element={<ManageRoadmaps />} />
        <Route path="/admin/roadmap" element={<AddRoadmap />} />
        <Route path="/admin/steps" element={<StepsSettings />} />
        <Route path="/admin/step" element={<AddStep />} />
      </Routes>
    </>
  );
}

export default App;
