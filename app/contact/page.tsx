"use client";
import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <Navbar />
      <div className="bg-white p-6 text-black">
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
          {/* Left: Google Maps */}
          <div className="w-full md:w-1/2 h-full mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full md:w-1/2 pl-6 mt-10 md:mt-0 flex flex-col justify-center">
            <h2 className="text-xl font-medium mb-2 text-gray-700">
              Information
            </h2>
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <p className="mb-4">
              If you have any questions or problems, simply use the following
              contact details:
            </p>
            <div className="mb-4 flex items-center">
              <div className="bg-red-500 text-white p-3 rounded-full mr-3">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Main Office</h3>
                <p>
                  Jl. Indonesia Raya Merdeka No.45, Jakarta Pusat, DKI Jakarta,
                  Indonesia, 10110
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="bg-red-500 text-white p-3 rounded-full mr-3">
                <FaPhone className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Contact Number</h3>
                <p>+62 8128 008 0275</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-500 text-white p-3 rounded-full mr-3">
                <FaEnvelope className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>info@webekspor.com</p>
              </div>
            </div>
          </div>
        </div>

        <section
          ref={ref}
          className="relative h-screen bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner7.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative flex flex-col lg:flex-row justify-around items-center py-16 text-white container mx-auto h-full">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold">
                Got questions? Please Contact us!
              </h2>
              <p className="text-lg mt-2">Reach us through</p>

              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
