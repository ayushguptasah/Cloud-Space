import React from 'react';
import "../../styles/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

const index = ({ userPhoto }) => {
    return (
      <div className="header">
        <div className="header_logo">
          <img
            src="https://img.icons8.com/external-wanicon-two-tone-wanicon/100/000000/external-cloud-cloud-technology-wanicon-two-tone-wanicon.png"
            alt="header_logo"
          />
          <span>Cloud Space</span>
        </div>
        <div className="header_searchContainer">
          <div className="header_searchBar">
            <SearchIcon />
            <input type="text" placeholder="Search in Space" />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="header_icons">
          <span>
            <HelpOutlineIcon />
            <SettingsIcon />
          </span>
          <AppsIcon />
          <img src={userPhoto} alt="User Photo" />
          {/* <img src="https://lh3.googleusercontent.com/ogw/ADea4I7UWQF-fRGk5G1_sWW1ApYe7LwVveXSmdIMEapqsA=s83-c-mo" alt="User Photo" /> */}
        </div>
      </div>
    );
}

export default index;
