import React from "react";
import "./index.css";

import design from "./images/desktop/image-graphic-design.jpg";
import photography from "./images/desktop/image-photography.jpg";
function Section3() {
  return (
    <div class="container-fluid">
      <div class="row ">
        {/* <div className="egg back-image2" class="col-sm-12 c0l-md-6 no-gutters">
          <div className="over-text">
            <h2> Graphic Design </h2>
            <p className="over-parag">
              Great design makes you memeorable. we deliver artwork that
              underscore your brand message and capture potential clients'
              attention
            </p>
          </div>
        </div>
        <div className="egg back-image1" class="col-sm-12 col-md-8 no-gutters">
          <div className="over-text">
            <h2> Photography </h2>
            <p className="over-parag">
              Increase your credibiliity by getting the most
              stunning,high-quality photos that improve your buisness image.
            </p>
          </div>
        </div> */}
                <div class="card col-sm-6 c0l-md-6 no-gutters">
                  <img src={design} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                     <h2 class="card-title"> Graphic Design</h2>
                    <p class="over-parag card-text">Great design makes you memeorable. we deliver artwork that
              underscore your brand message and capture potential clients'
              attention</p>
  </div>
</div>
                  <div class="card col-sm-6 c0l-md-6 no-gutters">
                  <img src={photography} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                     <h2 class="card-title">Photography</h2>
                    <p class="over-parag card-text"> Increase your credibiliity by getting the most
              stunning,high-quality photos that improve your buisness image.</p>
  </div>
</div>
      </div>
    </div>
  );
}
export default Section3;
