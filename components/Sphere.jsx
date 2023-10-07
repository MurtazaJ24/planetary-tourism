import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BackSide } from "three";
export default function Sphere({
  texture,
  rotateZ = 0,
  args,
  noRotate = false,
  ...props
}) {
  const meshRef = useRef(null);
  const { camera } = useThree();
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.z = rotateZ;
    if (!noRotate) meshRef.current.rotation.y += delta * 0.1;

    if (clicked) {
      const pos = meshRef.current.position;
      state.camera.position.lerp(pos, 0.5);
      state.camera.lookAt(pos);
      //   state.camera.updateProjectionMatrix();

      setClicked(false);
    }

    return null;
  });

  return (
    <mesh ref={meshRef} onClick={() => setClicked(true)} {...props}>
      <sphereGeometry rotateZ={rotateZ} args={args} />
      <meshPhysicalMaterial
        side
        map={texture}
        clearcoat={0}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
