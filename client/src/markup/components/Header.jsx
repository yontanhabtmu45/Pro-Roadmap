import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import loginService from "../services/login.service";

function Header() {
  // Use the custom hook to access the data in the context
  const { isLogged, setIsLogged } = useAuth();
  console.log(useAuth())

  // Function to handle logout
  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode)
        document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.removeAttribute("data-theme");
      // also keep legacy body class for older components/styles that relied on it
      document.body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((v) => !v);

  return (
    <header className="main-header">
      <div className="inner-header">
        <div className="header-title">
          <h2>
            <Link to="/">ProRoadmap</Link>
          </h2>
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllRoadmaps">All Roadmaps</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-pressed={isDarkMode}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <CiLight /> : <MdOutlineNightlight />}
              </button>
            </li>
            <li>
              {isLogged ? (
                <div className="link-btn">
                  <Link
                    to="/Register"
                    className="theme-btn btn-style-one blue sign-up-btn"
                    onClick={logOut}
                  >
                    Log out
                  </Link>
                </div>
              ) : (
                <div className="link-btn">
                  <Link
                    to="/login"
                    className="theme-btn btn-style-one sign-in-btn"
                  >
                    Login
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
