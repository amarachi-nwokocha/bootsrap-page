import React from "react";
import "./index.css";
import lamp from "./images/desktop/image-stand-out.jpg";

function Section2() {
  return (
    <div class="container-fluid">
      <div class="row no-gutters px-0">
        <div class="col-sm-6">
          <img src={lamp} class="egg img-fluid"></img>
        </div>
        <div  className="some-text col-sm-6">
          <h1 className="big-text">Stand out to the right audience</h1>
          <p className="small-text">
            Using a colaborative formular of designers,resaerchers,
            photographers, videographer and copywriters,we'll build and extend
            your brand in digital places
          </p>

          <button className="but">Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default Section2;
