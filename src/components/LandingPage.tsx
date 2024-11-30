import React from "react";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button>About</button>
        <button>Technology</button>
        <button>Research</button>
      </nav>

      {/* Logo Section */}
      <div className="logo-container">
        <img
          src={require("../assets/logo.png")}
          alt="Premonition Engine Logo"
          className="logo"
        />
      </div>

      {/* Content Section (Illustration + Tagline) */}
      <div className="content-container">
        <img
          src={require("../assets/illustration.png")}
          alt="Constellation Illustration"
          className="illustration"
        />
        <div className="tagline">
          <p>Imagine, events are connected,</p>
          <p>and <span className="highlight">deep knowledge</span> is derived,</p>
          <p>where could it lead you?</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
