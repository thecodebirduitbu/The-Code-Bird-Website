import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [modelLoaded, setModelLoaded] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const computer = await new Promise((resolve) =>
          new GLTFLoader().load("./desktop_pc/scene.gltf", resolve)
        );
        setModelLoaded(computer.scene);
      } catch (error) {
        console.error("Error loading the GLTF file:", error);
      }
    };

    loadModel();
  }, []);

  if (!modelLoaded) {
    return <CanvasLoader />;
  }

  return (
    <mesh>
      <directionalLight intensity={0.8} position={[20, 50, 10]} castShadow />
      <pointLight intensity={1} />
      <primitive
        object={modelLoaded}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.setAnimationLoop((time, deltaTime) => {
          if (deltaTime > 1000 / 30) {
            gl.render(gl.scene, gl.camera);
          }
        });
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

    
    </Canvas>
  );
};

export default ComputersCanvas;
