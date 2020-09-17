import React from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <img
          className="header_logo"
          src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh-320-80.jpg"
          alt=""
        />
      </div>

      <div className="header_input">
        <input placeholder="search" type="text" />
        <SearchIcon className="header_searchbtn" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
      </div>
    </div>
  );
}

export default Header;
