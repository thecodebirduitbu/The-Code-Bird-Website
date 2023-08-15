import React, { useState } from "react";
import "./style.css";
import Loader from "./Glitch Countdown Logo_free.mp4";
const VideoPreloader = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="mx-auto w-full h-full z-99999 bg-black items-center"
      onClick={toggleMute}
    >
      <video
        src={Loader}
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-full"
      ></video>
    </div>
  );
};

export default VideoPreloader;
