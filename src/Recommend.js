import React from "react";
import "./Video.css";
import VideoCard from "./VideoCard";

function Recommend() {
  return (
    <div className="recommend">
      <h2>Recommend</h2>
      <div className="recommend_videos">
        <VideoCard
          title="Tenet Trailer"
          views="30M Views"
          timestamp="3 Months ago"
          channelImage="https://pbs.twimg.com/profile_images/1267138309513330688/Ljv7gnAk_400x400.jpg"
          channel="Warner Bros"
          image="https://www.indiewire.com/wp-content/uploads/2020/05/tenet-2.png"
        />
        <VideoCard
          title="Justice League Snyder Cut"
          views="11 M Views"
          timestamp="3 Weeks ago"
          channelImage="https://pmcvariety.files.wordpress.com/2020/05/hbo-max.png?w=1001"
          channel="HBO Max"
          image="https://upyourgeek.com/wp-content/uploads/2020/05/31d5d222933c44db4cc26318368b2d3c.jpg"
        />

        <VideoCard />
      </div>
    </div>
  );
}

export default Recommend;
