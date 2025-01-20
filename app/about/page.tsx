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
        <div className="relative w-full  lg:w-1/2 flex justify-center lg:justify-start mt-20 lg:mt-0">
          {/* First Image - Overlapping and in the foreground */}
          <div className="w-72 mx-20 mt-60 h-48 lg:w-96 lg:h-60 relative z-10 shadow-lg">
            <Image
              src="/images/DSCF0577.JPG"
              alt="Sarapan Kue Pasar"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          {/* Second Image - Background */}
          <div className="absolute  top-1/2 left-1/2 md:-mx-36 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[450px] h-[350px] sm:h-[450px] lg:h-[450px] z-0 shadow-xl">
            <Image
              src="/images/57.jpg"
              alt="Sate Soto Lontong"
              layout="fill"
              objectFit="cover"
              className="rounded-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 mb-4">
            About Ayu Ayu
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Nikmati kelezatan sarapan khas Nusantara dengan aneka pilihan Kue
            Pasar dan menu spesial seperti Sate Soto Lontong.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Kue Pasar kami dibuat segar setiap pagi, dengan bahan-bahan
            berkualitas untuk menghadirkan cita rasa autentik yang menggugah
            selera.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Tidak hanya itu, Sate Soto Lontong kami menggabungkan kelezatan soto
            berkuah gurih dengan sate yang empuk dan lontong yang lembut,
            menciptakan harmoni rasa yang sempurna.
          </p>
        </div>
      </section>

      <section
        ref={ref} // Menyambungkan elemen ke useInView
        className="relative h-1/3 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/DSCF0498.jpg')" }}
      >
        {/* Overlay untuk efek gelap */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten */}
        <div className="relative flex flex-col lg:flex-row justify-around items-center py-16 text-white container mx-auto h-full">
          {/* Item Statistik */}
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={50} duration={2} />}+
            </h2>
            <p className="text-lg mt-2">Varian Kue Pasar</p>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={10} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Tahun Pengalaman</p>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={15} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Menu Sarapan</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={30} duration={2} />}+
            </h2>
            <p className="text-lg mt-2">Mitra</p>
          </div>
        </div>
      </section>

      {/* Bagian "Our Chef" */}
      <section className="py-16 bg-white h-auto text-black">
        <div className="text-center">
          <h3 className="text-red-600 text-xl font-bold">Professionals</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 container mx-auto">
          {/* Chef Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-96 relative">
              <Image
                src="/images/chef1.jpg"
                alt="Team Member 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h4 className="text-xl font-bold mt-4">Ayu Chef</h4>
            <p className="text-gray-600">Ahli Kue Tradisional</p>
          </div>
          {/* Chef Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-96 relative">
              <Image
                src="/images/chef5.jpg"
                alt="Team Member 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h4 className="text-xl font-bold mt-4">Chef Budi</h4>
            <p className="text-gray-600">Spesialis Soto</p>
          </div>
          {/* Chef Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-96 relative">
              <Image
                src="/images/chef6.jpg"
                alt="Team Member 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h4 className="text-xl font-bold mt-4">Chef Lina</h4>
            <p className="text-gray-600">Ahli Sate Lontong</p>
          </div>
        </div>
      </section>
    </div>
  );
}
