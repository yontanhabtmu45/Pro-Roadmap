import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import "./Header.css";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="main-header">
      <div className="inner-header">
        <div className="header-title">
          <h2>ProRoadmap</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">All Roadmaps</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? <MdOutlineNightlight /> : <CiLight />}
              </button>
            </li>
            <li>
              <a href="/Login">
                <button>Sign In</button>
              </a>
            </li>
            <li>
              <a href="/Register">
                <button>Sign Up</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
