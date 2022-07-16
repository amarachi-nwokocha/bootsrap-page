import React from "react";
import "./index.css";
import egg from "./images/mobile/image-transform.jpg";

function Section1() {
  return (
    <div class="container-fluid">
      <div class="row no-gutters px-0">
        <div class="col-sm-6 ">
          <h1 className="big-text">Transform your brand</h1>
          <p className="small-text">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <button className="but">Learn More</button>
        </div>
        <div class="col-sm-6">
          <img src={egg} className="egg img-fluid"></img>
        </div>
      </div>
    </div>
  );
}
export default Section1;
/**
<h1 className="big-text">BIG TEXT HERE VERY BIG TEXT</h1>
          <p className="text">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>**/
