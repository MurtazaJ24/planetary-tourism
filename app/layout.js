"use client";
import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import { useRef } from "react";
import { Maximize2Icon } from "lucide-react";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const screenRef = useRef();

  const toggleFullScreen = () => {
    if (screenRef.current) {
      if (document.fullscreenElement) {
        // Exit full screen if it's already in full screen mode
        document.exitFullscreen();
      } else {
        // Request full screen if not in full screen mode
        screenRef.current.requestFullscreen();
      }
    }
  };
  return (
    <html lang="en">
      <body className={`bg-black relative text-white ${raleway.className}`}>
        <div ref={screenRef}>{children}</div>
        <button
          onClick={toggleFullScreen}
          className="absolute z-10 right-6 bottom-6"
        >
          <Maximize2Icon />
        </button>
      </body>
    </html>
  );
}
