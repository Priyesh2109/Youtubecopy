import React from "react";
import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
        <h4>
          {channel} {verified && <CheckCircleIcon className="tick" />}
        </h4>

        <p>
          {subs} * {noOfVideos} videos
        </p>
        <p> {description} </p>
      </div>
    </div>
  );
}
export default ChannelRow;
