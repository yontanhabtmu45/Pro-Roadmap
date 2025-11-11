import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Register.css";

function Register() {
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
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter your full name" />
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Enter your Email" />
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter your password" />
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder="confirm your password" />
                <input type="button" value="Sign Up" />
              </form>
              <div className="login-link">
                Already have an account?
                <a href="/Login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
