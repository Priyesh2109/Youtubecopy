import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Burger.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function main(props) {
  return (
    // Pass on our props
    <Menu {...props}>
      <img
        className="header_logo"
        src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh-320-80.jpg"
        alt=""
      />
      <hr className="break" />

      <a className="menu-item" href="/">
        <HomeIcon /> Home
      </a>

      <a className="menu-item" href="/burgers">
        <WhatshotIcon /> Trending
      </a>

      <a className="menu-item" href="/pizzas">
        <SubscriptionsIcon /> Subscriptions
      </a>
      <hr className="break" />

      <a className="menu-item" href="/desserts">
        <VideoLibraryIcon /> Library
      </a>
      <a className="menu-item" href="/desserts">
        <HistoryIcon />
        History
      </a>
      <a className="menu-item" href="/desserts">
        <OndemandVideoIcon /> Your videos
      </a>
      <a className="menu-item" href="/desserts">
        <WatchLaterIcon /> Watch later
      </a>
      <a className="menu-item" href="/desserts">
        <ExpandMoreIcon />
        Show more
      </a>
    </Menu>
  );
}
export default main;
