import React, { useState } from "react";
import "./style.css";
import Loader from "./Glitch Countdown Logo_free.mp4";
const VideoPreloader = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-preloader" onClick={toggleMute}>
      <video
        src="/CodebirdVideo.mp4"
        autoPlay
        muted={isMuted}
        className="video"
      ></video>
    </div>
  );
};

export default VideoPreloader;
