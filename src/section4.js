import React from "react";
import "./style.css";

import emily from "./images/image-emily.jpg";
import jennie from "./images/image-jennie.jpg";
import thomas from "./images/image-thomas.jpg";
function Section4() {
  return (
    <div class="container-fluid">
      <div className="sub-sec" class="row  no-gutters px-0">
        <div class="col-sm-12">
          <h2 className="sub-head">CLIENT TESTIMONIALS</h2>
        </div>
      </div>

      <div className="sub-sec2" class="row  no-gutters px-0">
        <div class="col-sm-4">
          <div class="card-sec">
            <div class="card-body">
              <img src={emily} alt=" an image" />
              <p class="und-text">
                we put our trust in Sunnyside and they delivered. making sure our needs were met and 
                deadlines were always hit.
              </p> 
              <h5 class="card-title">Emily R.</h5>
              <p class="sub-title">Marketing Director</p>
            </div>
          </div>
        </div>

        {/*** */}
        <div class="col-sm-4">
          <div class="card-sec">
            <div class="card-body">
              <img src={thomas} alt=" an image" />
              <p class="und-text">
                Sunnyside's enthusiasim coupled with their keen intreast in our brand's success mad it 
                a satisfying and enjoyable experience.
              </p>
              <h5 class="card-title">Thomas S.</h5>
              <p class="sub-title">Cheif Operating Officer</p>
            </div>
          </div>
        </div>
        {/*** */}
        <div class="col-sm-4">
          <div class="card-sec">
            <div class="card-body">
              <img src={jennie} alt=" an image" />
              <p class="und-text">
                  incredible end result! Our sales increased over 400%when we worked with sunnyside
                  Highly recommemded!
              </p>
              <h5 class="card-title">Jennie F.</h5>
              <p class="sub-title">Buisness Owner</p>
            </div>
          </div>
        </div>
        {/*** */}
      </div>
    </div>
  );
}
export default Section4;
