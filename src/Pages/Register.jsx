import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Register.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="main-highlight container">
      <div className="inner-main-highlight row">
        <div className="banner-login col-md-6">
          <h2>Pro Roadmap</h2>
          <p>
            Your Roadmap to mastery. Chart your course to becoming a top tier
            developer.
          </p>
        </div>
        <div className="singup-wrapper col-md-6 h-100">
          <div className="inner-signup">
            <h1>Create an Account</h1>
            <p>Start your journey to become the top developer.</p>
            <div className="form-signup">
              <form action="">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" required />
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                  {showConfirmPassword ? (
                    <FaRegEyeSlash
                      className="eye-icon"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <FaRegEye
                      className="eye-icon"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                </div>
                <input type="submit" value="Sign Up" />
              </form>
              <div className="login-link">
                Already have an account?
                <Link to="/">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
