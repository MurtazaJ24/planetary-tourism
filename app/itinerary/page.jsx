// pages/itinerary.jsx
"use client";
import React, { useState } from "react";

const planets = [
  { name: "Earth", component: Earth },
  { name: "Mercury", component: Mercury },
  { name: "Venus", component: Venus },
  { name: "Mars", component: Mars },
  { name: "Jupiter", component: Jupiter },
  { name: "Saturn", component: Saturn },
  { name: "Uranus", component: Uranus },
  { name: "Neptune", component: Neptune },
  { name: "ReturnToEarth", component: ReturnToEarth },
];

export default function Itinerary() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const nextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  const prevPlanet = () => {
    setCurrentPlanetIndex((prevIndex) =>
      prevIndex === 0 ? planets.length - 1 : prevIndex - 1
    );
  };

  const CurrentPlanetComponent = planets[currentPlanetIndex].component;

  return (
    <div className="flex px-16 pt-10 pb-4 flex-col h-screen mx-auto">
      <h1 className="text-7xl font-bold mb-4 text-center">
        Space Tourism Itinerary: "Venusian Enigma Expedition"
      </h1>
      <div className="flex flex-1 gap-10 relative justify-center items-center p-4 overflow-y-auto pr-12 py-8 ">
        <CurrentPlanetComponent />
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2"
          onClick={prevPlanet}
        >
          Previous Planet
        </button>
        <button
          className="bg-transparent border border-white text-white px-4 py-2 rounded-lg"
          onClick={nextPlanet}
        >
          Next Planet
        </button>
      </div>
    </div>
  );
}

function Earth() {
  const colors = ["#00FF00", "#0000FF"]; // Dark Green to Dark Blue colors
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Earth - Departure to Venus
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Depart from Earth's spaceport on an exciting journey to Venus.</li>
      </ul>
    </div>
  );
}

function Mercury() {
  const colors = ["#D2B48C", "#8B4513"];
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Mercury - The Swiftest Planet
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Begin your journey at the closest planet to the Sun, Mercury.</li>
        <li>
          Explore the surface and witness the unique landscape of rocky plains
          and volcanic features.
        </li>
        <li>
          Experience the extreme temperature and pressure conditions on the
          planet.
        </li>
        <li>
          Witness the unique orbital characteristics of Mercury, including its 3
          to 2 spin-orbit resonance.
        </li>
        <li>
          Make sure to take a picture of the Sun from Mercury's surface, because
          that's the closest you can get!
        </li>
      </ul>
    </div>
  );
}

// Import CSS from your stylesheet or add it inline

function Venus() {
  const colors = ["#ffcc00", "#ff6600"];
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Venus - Arrival and Exploration
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Arrive at Venus and enter its thick atmosphere.</li>
        <li>
          Explore the surface and witness the unique landscape of rocky plains
          and volcanic features.
        </li>
        <li>
          Experience the extreme temperature and pressure conditions on the
          planet.
        </li>
      </ul>
    </div>
  );
}

function Mars() {
  const colors = ["#cc3300", "#ff6600"]; // Updated colors for a darker red gradient
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Mars - The Red Planet
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Arrive at Mars and witness its red surface.</li>
        <li>
          Explore the surface and witness the unique landscape of rocky plains
          and volcanic features.
        </li>
        <li>
          Experience the extreme temperature and pressure conditions on the
          planet.
        </li>
      </ul>
    </div>
  );
}

function Jupiter() {
  const colors = ["#B87333", "#AB8A83"]; // Updated colors for a brown gradient
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Jupiter - The Gas Giant
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Journey to Jupiter, the largest planet in the solar system.</li>
        <li>
          Witness the powerful storms on Jupiter, including the famous Great Red
          Spot.
        </li>
        <li>Explore Jupiter's diverse moons and their unique features.</li>
      </ul>
    </div>
  );
}

function Saturn() {
  const colors = ["#FFD700", "#DAA520"]; // Colors for a gold-like gradient
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Saturn - The Ringed Planet
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Travel to Saturn and admire its breathtaking rings.</li>
        <li>
          Conduct a spacewalk within the rings to experience their beauty up
          close.
        </li>
        <li>
          Study Saturn's moons, including Titan with its thick atmosphere.
        </li>
      </ul>
    </div>
  );
}

function Uranus() {
  const colors = ["#00CED1", "#4682B4"]; // Colors for Uranus
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Uranus - The Ice Giant
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Set course for Uranus and experience its extreme axial tilt.</li>
        <li>Study the icy composition of Uranus's atmosphere.</li>
        <li>
          Observe its unique orbital characteristics in the outer reaches of the
          solar system.
        </li>
      </ul>
    </div>
  );
}

function Neptune() {
  const colors = ["#0000FF", "#800080"];
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Neptune - The Blue Giant
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Reach Neptune and explore its stormy atmosphere.</li>
        <li>
          Investigate dynamic weather patterns and dark spots on the distant
          planet.
        </li>
        <li>Appreciate the unique features of Neptune's moon Triton.</li>
      </ul>
    </div>
  );
}

function ReturnToEarth() {
  const colors = ["#228B22", "#87CEEB"]; // Green and Blue colors
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
  return (
    <div className="mb-6">
      <h2
        className="text-6xl font-bold mb-2"
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Return to Earth
      </h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>
          Begin the return journey to Earth, filled with incredible memories of
          a Venusian Odyssey and a tour of the wonders of our solar system.
        </li>
      </ul>
    </div>
  );
}
