"use client";
import Navbar from "@/components/organisems/navbar";
import Image from "next/image";
import CountUp from "react-countup";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  // Hook untuk mendeteksi apakah elemen terlihat
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.5, // Elemen dianggap terlihat saat 50% terlihat di layar
  });
  return (
    <div>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-center bg-white min-h-screen px-8 lg:px-24">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mt-20 lg:mt-0">
          {/* First Image - Overlapping and in the foreground */}
          <div className="w-72 mx-20 mt-60 h-48 lg:w-96 lg:h-60 relative z-10 shadow-lg">
            <Image
              src="/images/chicken32.jpg"
              alt="First image description"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          {/* Second Image - Background */}
          <div className="absolute top-1/2 left-1/2 -mx-36 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-0 shadow-xl">
            <Image
              src="/images/chicken15.jpg"
              alt="Second image description"
              layout="fill"
              objectFit="cover"
              className="rounded-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            About Company
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The World Class Tasty Chicken With Crispy And Irresistible Flavors
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Tasty fried chicken is a culinary masterpiece that tantalizes the
            taste buds with its irresistible flavors and textures. When properly
            executed, the chicken is fried to perfection, resulting in a crispy
            and golden exterior that crackles with every bite.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The allure of tasty fried chicken extends beyond its flavors and
            textures. It brings people together, evoking feelings of comfort,
            nostalgia, and joy.
          </p>
        </div>
      </section>
      <section
        ref={ref} // Menyambungkan elemen ke useInView
        className="relative h-1/3 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bnner.jpg')" }}
      >
        {/* Overlay untuk efek gelap */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten */}
        <div className="relative flex flex-col lg:flex-row justify-around items-center py-16 text-white container mx-auto h-full">
          {/* Item Statistik */}
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {inView && <CountUp start={0} end={32} duration={2} />}+
            </h2>
            <p className="text-lg mt-2">Menu</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {inView && <CountUp start={0} end={23} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Outlets</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {inView && <CountUp start={0} end={14} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Years</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              {inView && <CountUp start={0} end={74} duration={2} />}+
            </h2>
            <p className="text-lg mt-2">Employees</p>
          </div>
        </div>
      </section>

      {/* Bagian "Our Chef" */}
      <section className="py-16 bg-white h-screen text-black">
        <div className="text-center">
          <h3 className="text-red-600 text-xl font-bold">Professionals</h3>
          <h2 className="text-4xl font-bold mt-2">Our Chef</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 container mx-auto">
          {/* Chef Card 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/chef1.jpg"
              alt="Chef 1"
              className="w-72 h-96 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold mt-4">Chef Name</h4>
            <p className="text-gray-600">Specialization</p>
          </div>
          {/* Chef Card 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/chef6.jpg"
              alt="Chef 2"
              className="w-72 h-96 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold mt-4">Chef Name</h4>
            <p className="text-gray-600">Specialization</p>
          </div>
          {/* Chef Card 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/chef5.jpg"
              alt="Chef 3"
              className="w-72 h-96 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold mt-4">Chef Name</h4>
            <p className="text-gray-600">Specialization</p>
          </div>
        </div>
      </section>
    </div>
  );
}
