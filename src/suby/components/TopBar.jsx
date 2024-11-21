import React from "react";
import { Link } from "react-router-dom";


const TopBar = () => {
  return (
    <section className="top-bar">
      <div className="right-section">
        <Link to='/' className="links">
          <h1 className="company-title">
            Royal<span>Suby</span>
          </h1>
        </Link>
      </div>

      <div className="center-section">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="button">Search</button>
      </div>

      <div className="left-section">
        <a href="#signin">SignIn</a>
        <a href="#signup">SignUp</a>
        <a href="#about">About</a>
      </div>
    </section>
  );
};

export default TopBar;
