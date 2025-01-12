"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-wrap justify-center bg-white gap-4 py-8">
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <Image
          src="/images/poster3.jpg"
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={800}
          height={800}
        />
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <Image
          src="/images/poster7.jpg"
          alt="Image 2"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={800}
          height={800}
        />
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <Image
          src="/images/poster9.jpg"
          alt="Image 3"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};

export default Banner;
