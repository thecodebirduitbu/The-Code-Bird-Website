import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const [progress, setProgress] = useState(0);
  const { progress: serverProgress } = useProgress();

  useEffect(() => {
    const updateProgress = () => {
      setProgress(serverProgress);
    };

    // Start listening for progress updates from the server
    const progressListener = setInterval(updateProgress, 100);

    // Stop listening for progress updates when the component is unmounted
    return () => {
      clearInterval(progressListener);
    };
  }, [serverProgress]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
