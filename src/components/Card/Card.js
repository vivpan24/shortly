import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="main_div">
      <img
        src={require("../../assests/icon-brand-recognition.svg").default}
        alt="mySvgImage"
        className="main_image"
      />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Brand Recognition</h5>
          <p class="card-text">
            Boost your brand regonition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
