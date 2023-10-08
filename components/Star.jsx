import { Point, PointMaterial, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending } from "three";

export default function Star(props) {
  // // const meshRef = useRef();
  return <Point {...props} color="white" />;
}
