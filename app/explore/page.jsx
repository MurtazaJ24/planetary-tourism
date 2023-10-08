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
import Link from "next/link";

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="relative grid place-items-center">
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        frameloop="always"
        camera={{ position: new Vector3(0, 0, 300), fov: 45, far: 10000 }}
      >
        <Scene setSelectedPlanet={setSelectedPlanet} />
      </Canvas>

      {selectedPlanet ? (
        <Link
          href={`/explore/${selectedPlanet}`}
          className="absolute bottom-6 bg-transparent border border-white px-4 py-2 uppercase cursor-pointer"
        >
          Know more about {selectedPlanet}
        </Link>
      ) : null}
    </div>
  );
}

function Scene({ setSelectedPlanet }) {
  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  // const { camera } = useThree();
  const controls = useRef();

  const onClick = (e) => {
    console.log(controls.current.target);
    const pos = e.eventObject.position;
    // clg;
    setTarget(pos);
    // camera.position.x = pos.x;
    // camera.position.y = pos.y;
    // camera.position.z = 300;

    // camera.updateProjectionMatrix();
    setSelectedPlanet(e.eventObject.userData ?? undefined);
  };

  return (
    <>
      <Space />
      <ambientLight />
      <Planets onClick={onClick} />
      <Sun onClick={onClick} />
      <OrbitControls
        // camera={camera}
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
