"use client";

import LandingStars from "@/components/LandingStars";
import { Canvas } from "@react-three/fiber";

export default function page() {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 0, 50], fov: 45 }}
    >
      <ambientLight />
      <spotLight
        intensity={0.2}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <LandingStars />
    </Canvas>
  );
}
