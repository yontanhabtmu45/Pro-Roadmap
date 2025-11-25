import React, { useState } from "react";
import "./Register.css";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogout = () => {
    googleLogout();
    console.log("Logout successful");
    navigate("/register");
  };

  const handleloginsucess = () => {
    navigate("/");
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to the Forgot Password page
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
              <form action="">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Enter your Email" required />
                <label htmlFor="password">Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
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
                <input type="submit" value="Login" onClick={handleloginsucess} />
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
                  {/* <Link to="https://google.com" target="_blank">
                    <button className="google-login">
                      {" "}
                      <FaGoogle />
                      Google
                    </button>
                  </Link> */}

                  <div id="googleBtn">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log("Login Success:", credentialResponse);
                        console.log(jwtDecode(credentialResponse.credential));
                        navigate("/");
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      auto_select={true}
                    />
                    {/* <h3>
                      <button onClick={handleLogout}>Logout</button>
                    </h3> */}
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

export default Login;
