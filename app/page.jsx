"use client";

import LandingStars from "@/components/LandingStars";
import { Canvas, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AudioListener } from "three";
import { Volume2Icon } from "lucide-react";
import { VolumeXIcon } from "lucide-react";

export default function page() {
  return (
    <div className="relative grid place-items-center w-full min-h-screen">
      <Canvas
        style={{ width: "100%", height: "100vh", position: "absolute" }}
        camera={{
          position: [0, 50, 0],
          fov: 90,
          far: 1000,
          near: 0.1,
          rotation: [0, 0, 0],
        }}
      >
        <ambientLight />
        <LandingStars radius={0} depth={500} factor={5} />
      </Canvas>
      <div className="z-10 flex flex-col gap-10 items-center">
        <h1 className="text-7xl uppercase text-[rgb(238,238,238)] tracking-wider font-light">
          To Infinity and Beyond
        </h1>

        <div className="flex flex-row gap-5">
          <Link
            href="/explore"
            className="bg-transparent border border-white px-4 py-2 uppercase cursor-pointer"
          >
            Explore
          </Link>
          <Link
            href="/itinerary"
            className="bg-transparent border border-white px-4 py-2 uppercase cursor-pointer"
          >
            Itinerary
          </Link>
        </div>
      </div>

      <Link
        href="/resources"
        className="bg-transparent px-4 py-2 cursor-pointer absolute z-10 left-6 bottom-6"
      >
        Resources
      </Link>
    </div>
  );
}
