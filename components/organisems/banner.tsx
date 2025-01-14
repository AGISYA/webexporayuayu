"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col items-center text-black bg-white gap-8 py-8">
      {/* Main Title */}
      <h2 className="text-2xl font-bold text-center mb-8">
        MANU APA AJA SIH DI AYU AYU?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Sarapan */}
        <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
          <h3 className="text-lg font-semibold mb-4">SARAPAN ?</h3>
          <Image
            src="/images/edited-9484.jpg"
            alt="Sarapan"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={800}
            height={800}
          />
        </div>

        {/* Jajanan */}
        <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
          <h3 className="text-lg font-semibold mb-4">JAJANAN TRADISIONAL?</h3>
          <Image
            src="/images/DSCF0370 - Copy.JPG"
            alt="Jajanan"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={800}
            height={800}
          />
        </div>

        {/* Makanan Berat */}
        <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
          <h3 className="text-lg font-semibold mb-4">ATAU MAKANAN BERAT?</h3>
          <Image
            src="/images/DSCF0532.JPG"
            alt="Makanan Berat"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
