import React, { Suspense, useEffect, useState } from "react";
import videoSrc from "../../assets/vid1.mp4";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black", // Optional: Add a background color
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          width: isMobile ? "275px" : "500px",
          height: "auto",
          borderRadius: "10px",
          marginTop: "250px",
        }}
      />
    </div>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh", // Use full viewport height
        backgroundColor: "black", // Optional: Add a background color
      }}
    >
      <ComputerModel isMobile={isMobile} />
    </div>
  );
};

export default ComputersCanvas;

