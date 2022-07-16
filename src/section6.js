import React from "react";
import "./style.css";
import facebook from "./images/icon-facebook.svg";
import insta from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
function Section6() {
  return (
    <div class="container-fluid">
      <div className="footer">
        <div className="sub-sec" class="row">
          <div class="col-sm-12">
            <h2 className="sub-head2">sunnyside</h2>
          </div>
        </div>
        <div class="row ">
          <ul class="nav justify-content-center">
            <li class="nav-item nav-link">
              <a class=" nav-link">About</a>
            </li>
            <li class="nav-item nav-link">
              <a class=" nav-link">Services</a>
            </li>
            <li class="nav-item nav-link">
              <a class=" nav-link">Projects</a>
            </li>
          </ul>
        </div>
        <div class="row ">
          <ul class="nav justify-content-center">
            <li class="nav-item nav-link">
              <img src={insta} alt=""></img>
            </li>
            <li class="nav-item nav-link">
              <img src={facebook} alt=""></img>
            </li>
            <li class="nav-item nav-link">
              <img src={twitter} alt=""></img>
            </li>
            <li class="nav-item nav-link">
              <img src={pinterest} alt=""></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Section6;
