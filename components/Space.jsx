import { useTexture } from "@react-three/drei";
import React from "react";
import { BackSide } from "three";

export default function Space() {
  const texture = useTexture("/stars_8k.jpg");

  return (
    <mesh scale={2000} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        side={BackSide}
        map={texture}
        clearcoat={0}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
