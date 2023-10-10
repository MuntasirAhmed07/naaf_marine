import React from 'react';
import "./teamCard.css";



const TeanCard = ({name, title, img, mail, tel, mob, web, skype}) => {
  return (
    <div className="member">
        <div className="name">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
        <div className="img">
          <img src={img} alt="CEO" />
        </div>
        <div className="info">
          <p>
            {mail}<br/>{mob}<br/>{tel}<br/>{web}<br/>{skype}
          </p>
        </div>
    </div>
  )
}

export default TeanCard