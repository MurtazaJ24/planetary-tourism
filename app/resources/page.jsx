import React from "react";
import resources from "@/lib/resources";

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <h1 className="text-4xl uppercase tracking-wider">
        Resources used for this project
      </h1>
      <div className="space-y-4 mt-8">
        {resources.map((resource) => {
          return (
            <div key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-2xl"
              >
                {resource.url}
              </a>
              <p className="text-md">{resource.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
