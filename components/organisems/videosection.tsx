import React from "react";

export default function VideoSection() {
  return (
    <div className="relative w-full mt-16">
      <iframe
        className="w-full h-screen" // This ensures the iframe takes up the full width and height of the viewport
        src="https://www.youtube.com/embed/XHOmBV4js_E"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
