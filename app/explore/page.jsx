"use client";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  KeyboardControls,
  Environment,
  Stars,
} from "@react-three/drei";

import { useRef, useState } from "react";

import Planets from "@/components/Planets";
import Space from "@/components/Space";
import Sun from "@/components/Sun";
import { Vector3 } from "three";

export default function App() {
  const canvasRef = useRef();

  const toggleFullScreen = () => {
    if (canvasRef.current) {
      if (document.fullscreenElement) {
        // Exit full screen if it's already in full screen mode
        document.exitFullscreen();
      } else {
        // Request full screen if not in full screen mode
        canvasRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative">
      <Canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100vh" }}
        frameloop="always"
        camera={{ position: [0, 0, 300], fov: 45, far: 10000 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  const controls = useRef();

  const onClick = (e) => {
    console.log(controls.current.target);
    setTarget(e.eventObject.position);
  };

  return (
    <>
      <Space />
      <ambientLight />
      <Planets onClick={onClick} />
      <Sun onClick={onClick} />
      <OrbitControls
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={target}
        zoom0={1}
        // maxZoom={}
      />
    </>
  );
}
