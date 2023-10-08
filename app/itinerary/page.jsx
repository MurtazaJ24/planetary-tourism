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
    <div className="container flex max-w-7xl pt-10 pb-4 flex-col h-screen mx-auto">
      <h1 className="text-7xl font-bold mb-4 text-center">
        Space Tourism Itinerary: "Venusian Enigma Expedition"
      </h1>
      <div className="flex flex-1 gap-10 relative justify-center items-center p-4 overflow-y-auto pr-12 py-8 ">
        <span className="absolute text-8xl top-0 -left-4">
          {`${currentPlanetIndex + 1}`.padStart(2, "0")}
        </span>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Earth - Departure to Venus</h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>Depart from Earth's spaceport on an exciting journey to Venus.</li>
      </ul>
    </div>
  );
}

function Mercury() {
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Mercury - The Swiftest Planet</h2>
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

function Venus() {
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Mars - The Red Planet</h2>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Jupiter - The Gas Giant</h2>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Saturn - The Ringed Planet</h2>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Uranus - The Ice Giant</h2>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Neptune - The Blue Giant</h2>
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
  return (
    <div className="mb-6">
      <h2 className="text-6xl font-bold mb-2">Return to Earth</h2>
      <ul className="list-disc ml-6 text-4xl">
        <li>
          Begin the return journey to Earth, filled with incredible memories of
          a Venusian Odyssey and a tour of the wonders of our solar system.
        </li>
      </ul>
    </div>
  );
}

// {/* Earth - Departure to Venus */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">Earth - Departure to Venus</h2>
//   <ul className="list-disc ml-6">
//     <li>
//       Depart from Earth's spaceport on an exciting journey to Venus.
//     </li>
//   </ul>
// </div>

// {/* Venus - Arrival and Exploration */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">
//     Venus - Arrival and Exploration
//   </h2>
//   <ul className="list-disc ml-6">
//     <li>Arrive at Venus and enter its thick atmosphere.</li>
//     <li>
//       Explore the surface and witness the unique landscape of rocky plains
//       and volcanic features.
//     </li>
//     <li>
//       Experience the extreme temperature and pressure conditions on the
//       planet.
//     </li>
//   </ul>
// </div>

// {/* Jupiter - The King of Gas Giants */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">
//     Jupiter - The King of Gas Giants
//   </h2>
//   <ul className="list-disc ml-6">
//     <li>Journey to Jupiter, the largest planet in the solar system.</li>
//     <li>
//       Witness the powerful storms on Jupiter, including the famous Great
//       Red Spot.
//     </li>
//     <li>Explore Jupiter's diverse moons and their unique features.</li>
//   </ul>
// </div>

// {/* Saturn - Rings and Beyond */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">Saturn - Rings and Beyond</h2>
//   <ul className="list-disc ml-6">
//     <li>Travel to Saturn and admire its breathtaking rings.</li>
//     <li>
//       Conduct a spacewalk within the rings to experience their beauty up
//       close.
//     </li>
//     <li>
//       Study Saturn's moons, including Titan with its thick atmosphere.
//     </li>
//   </ul>
// </div>

// {/* Uranus - The Tilted Ice Giant */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">
//     Uranus - The Tilted Ice Giant
//   </h2>
//   <ul className="list-disc ml-6">
//     <li>Set course for Uranus and experience its extreme axial tilt.</li>
//     <li>Study the icy composition of Uranus's atmosphere.</li>
//     <li>
//       Observe its unique orbital characteristics in the outer reaches of
//       the solar system.
//     </li>
//   </ul>
// </div>

// {/* Neptune - The Mystic Blue Giant */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">
//     Neptune - The Mystic Blue Giant
//   </h2>
//   <ul className="list-disc ml-6">
//     <li>Reach Neptune and explore its stormy atmosphere.</li>
//     <li>
//       Investigate dynamic weather patterns and dark spots on the distant
//       planet.
//     </li>
//     <li>Appreciate the unique features of Neptune's moon Triton.</li>
//   </ul>
// </div>

// {/* Return to Earth */}
// <div className="mb-6">
//   <h2 className="text-2xl font-bold mb-2">Return to Earth</h2>
//   <ul className="list-disc ml-6">
//     <li>
//       Begin the return journey to Earth, filled with incredible memories
//       of a Venusian Odyssey and a tour of the wonders of our solar system.
//     </li>
//   </ul>
// </div>
