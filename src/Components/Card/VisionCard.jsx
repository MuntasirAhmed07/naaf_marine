import React from 'react';
import Vision from '../../Assets/Mission/vision.png';
import "./card.css";

const VisionCard = () => {
  return (
    <div className='card'>
              <div className="upper-portion">
        <div class="imgbox">
          <img
            // src="https://www.shutterstock.com/image-illustration/arrow-compass-pointing-word-mission-260nw-303208415.jpg"
            src={Vision}
            alt="Tajmahal"
          />
        </div>
        <div class="title">
          <h2>OUR VISION</h2>
        </div>
      </div>
      <div className="lower-portion">
        <p>
        We are aiming to be the leading global service provider of Technical Management, Crew Management etc. with competent and qualified crewing and other maritime-related services and supplies that will enable our partners to succeed in their business.
        </p>
      </div>
    </div>
  )
}

export default VisionCard