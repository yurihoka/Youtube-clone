import React from "react";
import { useParams } from "react-router-dom";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
