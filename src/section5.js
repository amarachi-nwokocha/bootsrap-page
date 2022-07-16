import React from "react";
import "./style.css";
import cone from "./images/desktop/image-gallery-cone.jpg";
import milk from "./images/desktop/image-gallery-milkbottles.jpg";
import orange from "./images/desktop/image-gallery-orange.jpg";
import sugar from "./images/desktop/image-gallery-sugarcubes.jpg";
function Section5() {
  return (
    <div class="container-fluid">
      <div class="row ">
        <div class="col-sm-3">
          <img src={milk} class="img-fluid"></img>
        </div>
        <div class="col-sm-3">
          <img src={orange} class="img-fluid"></img>
        </div>
        <div class="col-sm-3">
          <img src={cone} class="img-fluid"></img>
        </div>
        <div class="col-sm-3">
          <img src={sugar} class="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}
export default Section5;
