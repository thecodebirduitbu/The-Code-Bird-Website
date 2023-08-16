import React, { useState } from "react";
import "./style.css";

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
