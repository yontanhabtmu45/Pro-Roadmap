import React from "react";
import "./Register.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
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
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Enter your Email" />
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter your password" />
                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>
                <input type="button" value="Login" />
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
                  <Link to="https://google.com" target="_blank">
                    <button className="google-login">
                      {" "}
                      <FaGoogle />
                      Google
                    </button>
                  </Link>
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
