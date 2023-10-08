"use client";

import LandingStars from "@/components/LandingStars";
import { Canvas, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AudioListener } from "three";
import { Volume2Icon } from "lucide-react";
import { VolumeXIcon } from "lucide-react";

export default function page() {
  const [playing, setPlaying] = useState(false);

  const audio = new Audio("/bg.mp3");

  useEffect(() => {
    audio.addEventListener("playing", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
  }, []);

  const toggleAudio = async () =>
    playing ? audio.pause() : await audio.play();

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
        <BackgroundAudio audio={audio}>
          <ambientLight />
          <LandingStars radius={0} depth={500} factor={5} />
        </BackgroundAudio>
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
      <button onClick={toggleAudio} className="absolute z-10 right-16 bottom-6">
        {playing ? <Volume2Icon /> : <VolumeXIcon />}
      </button>

      <Link
        href="/resources"
        className="bg-transparent px-4 py-2 cursor-pointer absolute z-10 left-6 bottom-6"
      >
        Resources
      </Link>
    </div>
  );
}

function BackgroundAudio({ audio, children }) {
  const audioListener = new AudioListener();
  const { camera } = useThree();

  useEffect(() => {
    camera.add(audioListener);
    audio.loop = true;
    audio.volume = 0.8; // Adjust the volume as needed
    audio.play();

    // Stop audio when navigating to other pages
    // router.events.on("routeChangeStart", () => {
    //   audio.pause();
    // });

    return () => {
      camera.remove(audioListener);
      audio.pause();
    };
  }, [camera, audio, audioListener]);

  return <>{children}</>;
}
