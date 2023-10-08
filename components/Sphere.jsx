import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BackSide } from "three";
export default function Sphere({
  texture,
  rotateZ = 0,
  args,
  onClick,
  noRotate = false,
  noClick = false,
  receiveShadow = true,
  planet,
  ...props
}) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    meshRef.current.rotation.z = rotateZ;
    if (!noRotate) meshRef.current.rotation.y += delta * 0.1;

    return null;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      receiveShadow={receiveShadow}
      userData={planet}
      {...props}
    >
      <sphereGeometry rotateZ={rotateZ} args={args} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        roughness={0}
        metalness={0}
      />
    </mesh>
  );
}
