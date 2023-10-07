import { LinearMipMapLinearFilter } from "three";
import Sphere from "./Sphere";

const { useTexture } = require("@react-three/drei");

export default function Sun(props) {
  const texture = useTexture("/sun_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      position={[0, 0, 0]}
      args={[1, 64, 64]}
      noRotate
      scale={80}
      texture={texture}
      {...props}
    />
  );
}
