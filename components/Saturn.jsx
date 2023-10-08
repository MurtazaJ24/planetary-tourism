import React, { useEffect, useRef } from "react";
import Sphere from "./Sphere";
import { useTexture } from "@react-three/drei";
import {
  LinearMipMapLinearFilter,
  DoubleSide,
  CircleGeometry,
  MeshBasicMaterial,
  Group,
} from "three";
import { useFrame } from "@react-three/fiber";

function Saturn({ onClick, position, ...props }) {
  const planetTexture = useTexture("/saturn_8k.jpg");
  planetTexture.generateMipmaps = true;
  planetTexture.minFilter = LinearMipMapLinearFilter;

  const ringTexture = useTexture("/saturn_rings.png");
  ringTexture.generateMipmaps = true;
  ringTexture.minFilter = LinearMipMapLinearFilter;

  const saturnGroup = useRef();
  const ringRef = useRef();

  useEffect(() => {
    if (ringRef.current) {
      // Tilt the rings (rotate around the x-axis)
      ringRef.current.rotation.x = toRadians(90);
      ringRef.current.rotation.y = toRadians(27);
    }
  }, []);

  return (
    <group position={position}>
      {/* Saturn planet */}
      <Sphere
        texture={planetTexture}
        noRotate
        // position={[560, 0, 0]}
        scale={27}
        rotateZ={toRadians(27)}
        onClick={onClick}
        {...props}
      />

      {/* Saturn's rings as a rotating plane */}
      <group ref={saturnGroup}>
        <mesh ref={ringRef}>
          <circleGeometry args={[60, 120]} />
          <meshBasicMaterial
            map={ringTexture}
            transparent
            opacity={0.8}
            side={DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export default Saturn;
