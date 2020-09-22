import React from "react";
import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description
}) {
  return (
    <div className="channelRow">
      <Avatar className="channel_logo" alt={channel} src={image} />
      <div className="channelRow_text">
        <h4> {channel} </h4>
      </div>
    </div>
  );
}
export default ChannelRow;
