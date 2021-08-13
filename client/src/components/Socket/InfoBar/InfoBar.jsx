import React from 'react'
import { Link } from '@reach/router';
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = (props) => {

    const {room}=props;
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <Link to="/join"><img src={closeIcon} alt="close icon" /></Link>
          {/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
        </div>
      </div>
    )
}

export default InfoBar
