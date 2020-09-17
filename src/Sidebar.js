import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SidebarRow from "./SidebarRow";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={OndemandVideoIcon} title=" Your Video" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
