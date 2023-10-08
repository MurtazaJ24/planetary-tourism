"use client";
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Uranus,
  Venus,
} from "@/components/Planets";
import Space from "@/components/Space";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import info from "@/lib/info.json";
import { useParams, useRouter } from "next/navigation";

export default function Planet() {
  const params = useParams();
  const router = useRouter();
  const planet = params.planet;
  let Component;
  switch (planet) {
    case "mercury":
      Component = Mercury;
      break;
    case "venus":
      Component = Venus;
      break;
    case "earth":
      Component = Earth;
      break;
    case "mars":
      Component = Mars;
      break;
    case "jupiter":
      Component = Jupiter;
      break;
    case "saturn":
      Component = Saturn;
      break;
    case "uranus":
      Component = Uranus;
      break;
    case "neptune":
      Component = Neptune;
      break;
    default:
      break;
  }

  if (!Component) {
    return router.replace("/explore");
  }

  return (
    <div className="min-h-screen grid grid-cols-2">
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <Space />
        <ambientLight />
        <Component position={[0, 0, 0]} scale={2} args={[1, 64, 64]} noClick />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="pt-24 h-screen gap-6 flex flex-col ">
        <h1 className="text-6xl font-bold uppercase tracking-widest">
          {planet}
        </h1>
        <div className="flex flex-col gap-10 overflow-y-auto pr-8 py-8">
          {Object.entries(info[planet]).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-lg uppercase tracking-wider	font-black text-white/40">
                {key}
              </span>
              <span className="text-2xl text-white/60">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
