import Star from "@/components/Star";
import { PointMaterial, Points, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, Vector3 } from "three";

export default function LandingStars() {
  const texture = useTexture("/star1.png");

  const positions = Array.from({ length: 6000 })
    .fill(0)
    .map(() => {
      const x = Math.random() * 600 - 300;
      const y = Math.random() * 600 - 300;
      const z = Math.random() * 600 - 300;

      const vec = new Vector3(x, y, z);
      vec.velocity = 0;
      vec.acceleration = 0.01;
      return vec;
    });

  useFrame((state, delta) => {
    positions.map((pos) => {
      pos.velocity += pos.acceleration;
      pos.z += pos.velocity * delta;
      //   const newPos = new Vector3(pos.x, pos.y, pos.z + delta);
      //   pos.lerp(newPos, 0.01);
    });
    return null;
  });

  return (
    <Points limit={positions.length}>
      <PointMaterial
        size={1.5}
        sizeAttenuation={true}
        map={texture}
        transparent={false}
        blending={AdditiveBlending}
      />

      {positions.map((pos, index) => (
        <Star key={index} position={[pos.x, pos.y, pos.z]} />
      ))}
    </Points>
  );
}
