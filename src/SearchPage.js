import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import TuneIcon from "@material-ui/icons/Tune";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchResults">
        <TuneIcon />
        <h2> filter </h2>
      </div>
      <hr />

      <ChannelRow
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAZlBMVEUDqfT///8Ap/QApfSIzfi03fptxPdOuvYAo/P3/f8AqvRUvPZyx/hevved1vrp9v4nsfUAoPPQ6/zF5/zw+f5nwveEzPjp9/6b1Pmp2/rc8f3z+/4drvUAnvO84/s9tvbY7/3B5fwo/2AhAAAHX0lEQVR4nO2cfaOqKBDGDbTISu3NsuPJ+v5fclVGQEPseHa3y+7z+6sE5M5zeJkZ6AYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8+EO2grMVWMUNvV29kGbfw8vonEa3cTGVWOMYssaXcrxGmHps3BsMc5FBKx8OCq4+NqwgK1cNc7808bPp3TYdeRBtp6pWk3F2NJd4dPGz8Y5HgrOT/NVW6SCX50VDt4ON3Z2mBUKt9lTVCJyV/i09bNhocOq8/4XU7Tmuj+4K3g7S3nhsCpzrujT3L8v7gobXzdTfndY5RyK78i2n6jg7WgTt3Gj1vuJpWmKp2ubbog/bf5cWB6OsuW78cJ32JXu8tzXOVrr5sBZ+A5TL/i08fNxGjVp8ZQqNoX+C6pl2+Uoq3i88JyJurWjQs22XOn6SiNmdPBBw38F2zoW7MS5oh/q9XzCQeHabbsJ1aUuD30db87oZ+neCFM+EXKevvU2fVdxlPHSpbeyuVyM1YT/EAq3X3f81kFG0slmBsHeum3cFf2UrqRSzWHvCjFqWbn+rHwNc1n4qOm/QTiinzVzRl6LxWP/dJazTH9WYRTTy8La2wSIcFidioA7c5T3b0eIUc9xvtNfsq5HY1lIvZUtMMxc92mSlAEPb+vhc0XyfRprvL5EJWO5rqs65Ef17OitbJU27MptDi0bPhVfqkVuROrnQb3m+IYnqvikFOKpehj5KpvpQWzf8wZi3WJn7LSVpbWRXXlot03L7q3bZmaGqtfRZomXuDE+zXScLZdhbNNPNbAM2f1124yt8jU0CmwRk+EfG77E2qaAsU0rt81cFvx1256LccrMUdhItdcSWjdFY5tW85EZu6u32TbuSlKa/oONm5HFtJ5Bmcugks3YXYWljRe4zvPSfT5e2HDfa1/ibpPNNh+N3TX1VjZX9DQVOi02RkI9schmbtPqobG7+ntK6lq9oonQ6SC44cJZtgRjPn6pYqF3V3/dNtfqdd07Q6dTbI7Vnc1t06NVZ9sMb/fqrWyu1WtrxAOvHGJmjtXM8nZjPhphlA7O3vSv/zycGY5VPF72WIr+PQjr2/VojWxJStsI9YNqNcomiDdjZYFoLS6NJzZ0sR6M+qUbb922medWltYTb7f2+M9aBrxEX+L9eamEeX9T9+esiiRJCttO2ZC1pc7zTl5uk+Qaehu3z4KyHCv7aGGbSVcifsp90+P7HjOgCGm+bF3UC9mM0inZtMv7P5NNTtKRa4+TspHLfHs+vE3lziRucJeOFlPQW+z/m1vpmPdpezrlqZrlNMU3Q3935j/zj4Lzapnny6rzvxj5Yoxn27BiPc+M86yty7h6IJ2yrhpnm/ZdrH3RXoatleje0PXFfM1+dPCyoEzHqSgbY9j1lKaXA+ebJhRPdvW39CQ9MxYktDGuo6w1fNWWLhk1EiyRGY5TzgMenVJZ/VKXlbKvrv0981o40csdhaJLW6ff8nwlOeudlPd++pEIY0ugRkY27S765zvlsK/E25x4bcngflshSLYbHeYZsvHBFcKnGMr2MK+M5P3scBmIZNHj6K1uKmWWdrmxMylw+xrKpi6mqbohG8jW47KPThc5J0+Xy6VUqqv2ha/zlMuVKGKiXpWksdw8W3pcrko2moDPWAhOh/n8RbZ0x3hJLm7G+1sC/R3qvjjNVk/jVLrLUOybL3TqWSnZkpjX5nZRAg3MY1uX5tuZD2Rbt74FHUKcmRljUI1rOzNplfT0ypFMW3cXEeTRQNgtQWFroDKcLliVsm5Ms2wgmzz3oyOKvC9be7Ohu3lEB1j/vsl/C+2/XR0NbxoyUoAOm7Rs7Xw+0DLOVk3dajhJpV9Lq2DYk60koam9XOj8PE6oulEhkalqUoBubSjDS2M4qbpD2WgsZq+yDaPXyuzEL2i5GvzJSQFarpXhq77ZVDqQjYJTm2yDvF3c/yv4hD0p1FdA1bHmOn4gm1zvqr5sXrogNNrOvUnKRmRbWSb0i9/mkG0wsgdz3ivkAtNdKmDhtWYp7LINl/Sm7na4k47LNljMSG8/c5fyEoe6VytFHJFN3uk6UV3R7quFeF821tuJ6T7A2MnOnw35YnJxI9e/Gpmk9HuCZTvcyF19cXcdslFf3eLWfvH0hwk0VU4lZ0zIxSsVI7LRLFtXoq4r/1OVtXh/bdN91e05e/SmrG90t82KPH/KT8uxLUH9fCXKc/r0Gso7ZAvEUbUvZCh88XOw1bDBLdSnGHNAXi/6Pl4SR07ZXvrqnGMfiVPTkKMY9duaz71fYD3YT/y2ll5f68zTKdpi/BD3K2/2OdrkOtnMAz8Rqkt96zbS17L1GknZrmx4XGhm5aLAZ9WaQ5Pt/ZGmh+hMh3LVrubcFWfn5hvNJ8bP0SFNH9GSzlDKpnSXDRrF7dNq2LruK9i27e957O26pmBcCGGcZFousRl128qvdXvV9JeX622D9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMziL3NTY6/WnHy6AAAAAElFTkSuQmCC"
        channel="ESPN Cricinfo"
        verified
        subs="864k"
        noOfVideos={7007}
        description="Join Cricket's Biggest fan club on Earth"
      />
      <hr />
      <VideoRow
        views="1.3k"
        subscription="1M"
        description="Preview of RCB Vs Kings XI-"
        timestamp="1hr ago"
        channel="Espn Cricinfo"
        title="RCB Vs Kings XI Dream 11"
        image="https://www.crictracker.com/wp-content/uploads/2020/09/dream11-FI-640x400-Match-6.png"
      />
      <VideoRow
        views="1.6k"
        subscription="1M"
        description="Review of RCB Vs MI"
        timestamp="1hr ago"
        channel="Espn Cricinfo"
        title="RCB Vs MI-Review"
        image="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/28/Pictures/_7dc0f2d8-01b7-11eb-a0ae-05799bfe6215.jpg"
      />
    </div>
  );
}
export default SearchPage;
