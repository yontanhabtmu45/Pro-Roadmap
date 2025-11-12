import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div
        style={{ textAlign: "center", backgroundColor: "#111", color: "#fff" }}
      >
        <div className="main-home">
          <div className="inner-home">
            <div className="home-content">
              <div className="first-content">
                <h1>Your Guided Path to Mastering</h1> <br />
                <h1>Tech Skills</h1>
                <p>
                  From beginner to pro, follow our curated roadmaps for
                  Full-Stack Development, devOps, and more.
                </p>
                <button>
                  <a href="#">Explore All Roadmaps</a>
                </button>
              </div>
              <div className="second-content">
                <div>Start Your Journey</div>
                <div className="roadmaps-list">
                  <div>
                    {/* icon */}
                    <div>Front-End Developer</div>
                    <div>
                      Master HTML,CSS,JavaScript, and modern frameworks.
                    </div>
                  </div>
                  <div>
                    {/* icon */}
                    <div>Back-End Developer</div>
                    <div>Learn NOde.js, database, and API design.</div>
                  </div>
                  <div>
                    {/* icon */}
                    <div>DevOps Engineer</div>
                    <div>
                      Understand CI/CD, containerization, and cloud services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="third-content">
                <div>
                  <h2>Why Choose ProRoadmap?</h2>
                  <p>
                    Structured Learning Paths: Clear, step-by-step roadmaps to
                    guide your learning journey.
                  </p>
                  <button>
                    <a href="/Register">Sign Up Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
