import React from "react";
import "./Slogan.css";
import people from "../../assests/people working.png";

export default function Slogan() {
  return (
    <div>
      <div className="slogan_text">
        <h1>
          MORE THAN JUST
          <br /> SHORTER LINKS
        </h1>
      </div>

      <div className="people">
        <img src={people} alt={"people"} />
      </div>
    </div>
  );
}
