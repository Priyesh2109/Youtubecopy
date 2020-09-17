import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="video_thumbnail" src={image} alt="" />
      <div className="video_Info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
