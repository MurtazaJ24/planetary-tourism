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
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      frameloop="always"
      camera={{ position: [0, 0, 300], fov: 45, far: 10000 }}
    >
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  const controls = useRef();

  const onClick = (e) => {
    setTarget(e.eventObject.position);
  };

  return (
    <>
      <Space />
      {/* <Stars count={1000000} depth={1000} /> */}
      <ambientLight />
      <Planets onClick={onClick} />
      {/* <pointLight color={0xffffff} intensity={400} decay={100}>
        <mesh castShadow scale={80}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={0xffffff} />
        </mesh>
      </pointLight> */}
      <Sun onClick={onClick} />
      <OrbitControls
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={target}

        // maxZoom={}
      />
    </>
  );
}
