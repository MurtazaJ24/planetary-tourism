import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <div className="grid h-screen place-items-center">
      <p className="text-4xl">
        Individual Planet Tours Under Development... Coming Soon!
      </p>
      <Link
        href="/"
        className="bg-transparent border border-white px-4 py-2 cursor-pointer"
      >
        Go back to home page
      </Link>
    </div>
  );
}
