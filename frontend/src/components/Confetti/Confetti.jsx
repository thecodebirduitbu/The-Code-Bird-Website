import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./confetti.css"
const ConfettiAnimation = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [recycleConfetti, setRecycleConfetti] = useState(true);
  const [originalZIndex, setOriginalZIndex] = useState(null);

  useEffect(() => {
    const confettiDuration = 7000; // 10 seconds in milliseconds
    const recycleDuration = 4000; // 5 seconds in milliseconds

    const timeoutId = setTimeout(() => {
      setShowConfetti(false);
    }, confettiDuration);

    const recycleTimeoutId = setTimeout(() => {
      setRecycleConfetti(false);
      setOriginalZIndex(null); // Reset the zIndex
    }, recycleDuration);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(recycleTimeoutId);
    };
  }, []);

  const handleConfettiClick = () => {
    if (originalZIndex === null) {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        const zIndexValue = window.getComputedStyle(mainContent).zIndex;
        setOriginalZIndex(zIndexValue);
      }
    }
    setRecycleConfetti(false);
  };

  return (
    <div>
      <div
        id="main-content"
        style={{
          position: "relative",
          zIndex: originalZIndex,
          transition: "z-index 0.5s", // Add a transition for a smoother effect
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          zIndex: showConfetti ? 9999 : -1,
          transition: "z-index 0.5s", // Add a transition for a smoother effect
        }}
        onClick={handleConfettiClick}
      >
        {showConfetti && (
          <>
            <Confetti
              numberOfPieces={500}
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={recycleConfetti}
              gravity={0.2}
              colors={[
                "#FF00FF",
                "#00FF00",
                "#0000FF",
                "#FFFF00",
                "#FF0000",
                "#00FFFF",
                "#FF8000",
                "#8000FF",
                "#00FF80",
              ]}
            />
            <img className="codebirdd"
              src="/Images/codebird.png"
              alt="Confetti"
              style={{ position: "absolute",width: "70%",marginTop: "80px"}}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ConfettiAnimation;
