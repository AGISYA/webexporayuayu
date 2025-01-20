"use client";

import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      image: "/images/nasgor tektek beef slice (1).jpg",
      title: "Welcome to Ayu Ayu",
      description: "Tradition in every bite",
    },
    {
      id: 2,
      image: "/images/72.jpg",
      title: "Quality You Can Trust",
      description: "We prioritize your satisfaction above all.",
    },
    {
      id: 3,
      image: "/images/48.jpg",
      title: "Join Us Today",
      description: "Become a part of our amazing community.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselData.map((item) => (
          <div key={item.id} className="w-full h-screen flex-shrink-0 relative">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
              width={10000}
              height={10000}
            />
            <div className="absolute md:mx-36 left-0 top-1/2 transform -translate-y-1/2 px-8 py-4 text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {item.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
