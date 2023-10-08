import Star from "@/components/Star";
import {
  PointMaterial,
  Points,
  Sparkles,
  Stars,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, Vector3 } from "three";

import { useRef } from "react";

export default function LandingStars(props) {
  // const texture = useTexture("/star1.png");

  // const positions = Array.from({ length: 6000 })
  //   .fill(0)
  //   .map(() => {
  //     const x = Math.random() * 600 - 300;
  //     const y = Math.random() * 600 - 300;
  //     const z = Math.random() * 600 - 300;

  //     const vec = new Vector3(x, y, z);
  //     vec.velocity = 0;
  //     vec.acceleration = 0.01;
  //     return vec;
  //   });

  // useFrame((state, delta) => {
  //   positions.map((pos) => {
  //     const newPos = pos.clone();
  //     newPos.velocity = pos.velocity;
  //     newPos.acceleration = pos.acceleration;
  //     console.log(newPos);
  //     newPos.velocity += newPos.acceleration;
  //     newPos.z += newPos.velocity;
  //     pos.lerp(newPos, 0.01);
  //   });
  //   return null;
  // });

  // return (
  //   <Points limit={positions.length}>
  //     <PointMaterial
  //       size={1.5}
  //       sizeAttenuation={true}
  //       map={texture}
  //       transparent={false}
  //       blending={AdditiveBlending}
  //     />

  //     {positions.map((pos, index) => (
  //       <Star key={index} position={[pos.x, pos.y, pos.z]} />
  //     ))}
  //   </Points>
  // );

  const starsRef = useRef(null);

  useFrame((state, delta) => {
    starsRef.current.rotation.x += 0.005;
  });

  return (
    <Sparkles
      speed={1}
      ref={starsRef}
      count={6000}
      scale={500}
      size={50}
      color={0xbafcff}
      // {...props}
    />
  );
}
