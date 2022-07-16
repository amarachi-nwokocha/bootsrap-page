import React from "react";
import "./index.css";
import arrow from "./images/icon-arrow-down.svg";
function Home() {
  return (
    <div>
      <div class="container-fluid" className="header">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Sunnyside
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              className="nav-tab"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav" class="navbar-nav" id="nav-items">
                <a class="nav-link" href="#">
                  About
                </a>
                <a class="nav-link" href="#">
                  services
                </a>
                <a class="nav-link" href="#">
                  Project
                </a>
                <button className="btns" class="btn " type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="head-text">
          <p>WE ARE CREATIVES</p>
        </div>
        <img className="arrow" src={arrow} alt="" />
      </div>
    </div>
  );
}
export default Home;
