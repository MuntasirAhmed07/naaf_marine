import React from "react";
// import Data from '../../Assets/Data/CardData';
import Mission from '../../Assets/Mission/mission.png';
import Vision from '../../Assets/Mission/vision.png';
import "./card.css";

const Card = () => {
  return (
    <div class="card">
      <div className="upper-portion">
        <div class="imgbox">
          <img
            // src="https://www.shutterstock.com/image-illustration/arrow-compass-pointing-word-mission-260nw-303208415.jpg"
            src={Mission}
            alt="Tajmahal"
          />
        </div>
        <div class="title">
          <h2>OUR MISSION</h2>
        </div>
      </div>
      <div className="lower-portion">
        <p>
          We deliver our services to the principal’s needs worldwide and supply
          through cost effective, quality service in conformity with national
          and international statutory standards.
        </p>
      </div>
    </div>
  );
};

export default Card;
