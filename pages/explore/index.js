import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  KeyboardControls,
  Environment,
  Stars,
} from "@react-three/drei";

import { useRef } from "react";

import Planets from "@/components/Planets";
import Space from "@/components/Space";
import Sun from "@/components/Sun";

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
  // const { camera } = useThree();
  // const controls = useRef(null);

  // const onClick = (e) => {
  //   const pos = e.eventObject.position;

  //   camera.lookAt(pos);
  //   camera.position.lerp(pos, 0.01);
  //   camera.updateProjectionMatrix();
  // };

  return (
    <>
      <Space />
      {/* <Stars count={1000000} depth={1000} /> */}
      <ambientLight />
      <spotLight
        intensity={0.2}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <Sun />
      <Planets />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        // maxZoom={}
      />
    </>
  );
}
