import React, { useState } from "react";
import "../../Pages/Register.css";
import { useLocation, useNavigate } from "react-router-dom";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import loginService from "../../services/login.service";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [admin_email, setEmail] = useState("");
  const [admin_password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleLogout = () => {
    googleLogout();
    console.log("Logout successful");
    navigate("/register");
  };

  const handleloginsucess = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to the Forgot Password page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle client side validations here
    let valid = true; // Flag
    // Email validation
    if (!admin_email) {
      setEmailError("Please enter your email address first");
      valid = false;
    } else if (!admin_email.includes("@")) {
      setEmailError("Invalid email format");
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(admin_email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    // Password has to be at least 6 characters long
    if (!admin_password || admin_password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!valid) {
      return;
    }
    // Handle form submission here
    const formData = {
      admin_email,
      admin_password,
    };
    console.log(formData);
    // Call the service
    const loginAdmin = loginService.login(formData);
    console.log(loginAdmin);
    loginAdmin
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          // Save the user in the local storage
          if (response.data.admin_token) {
            console.log(response.data);
            localStorage.setItem("admin", JSON.stringify(response.data));
          }
          // Redirect the user to the dashboard
          navigate('/admin');
          console.log(location);
          if (location.pathname === "/login") {
            // navigate('/admin');
            // window.location.replace('/admin');
            // To home for now
            window.location.replace("/");
          } else {
            window.location.reload();
          }
        } else {
          // Show an error message
          setServerError(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setServerError("An error has occurred. Please try again later." + err);
      });
  };

  return (
    <div className="main-highlight container">
      <div className="inner-main-highlight row">
        <div className="banner-login col-md-6">
          <h2>Pro Roadmap</h2>
          <p>
            Your Roadmap to mastery. Chart your course to becoming <br /> a top
            tier developer.
          </p>
        </div>
        <div className="singup-wrapper login-wrapper col-md-6 h-100">
          <div className="inner-signup login-inner">
            <h1>Welcome Back</h1>
            <p>Login to your account to continue your journey.</p>
            <div className="login-form form-signup ">
              {serverError && (
                <div className="validation-error" role="alert">
                  {serverError}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                {emailError && (
                  <div className="validation-error" role="alert">
                    {emailError}
                  </div>
                )}
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  value={admin_email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
                {passwordError && (
                  <div className="validation-error" role="alert">
                    {passwordError}
                  </div>
                )}
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={admin_password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  {showPassword ? (
                    <FaRegEyeSlash
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaRegEye
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
                <div className="forgot-password">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#61dafb",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="submit"
                  value="Login"
                  onClick={handleSubmit}
                />
              </form>
              <div className="login-link">
                Don't have an account?
                <Link to="/Register">Sign Up</Link>
              </div>
            </div>
            <div className="another-method">
              <div className="inner-method">
                <div className="divider">
                  <span>or login with</span>
                </div>
                <div className="social-login mt-3">
                  <div id="googleBtn">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log("Login Success:", credentialResponse);
                        console.log(jwtDecode(credentialResponse.credential));
                        navigate("/admin");
                      }}
                      onError={() => {
                        console.log("Login Failed");
                        {
                          serverError && (
                            <div className="validation-error" role="alert">
                              {serverError}
                            </div>
                          );
                        }
                      }}
                      auto_select={true}
                    />
                  </div>

                  <Link to="https://github.com" target="_blank">
                    <button className="github-login">
                      <FaGithub />
                      GitHub
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
