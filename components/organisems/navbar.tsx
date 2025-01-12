"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaInstagram,
  FaTiktok,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isScrolling = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          setShowNavbar(window.scrollY <= lastScrollY);
          setLastScrollY(window.scrollY);
          isScrolling.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black text-white px-6 py-4 fixed w-full z-10 transition-transform duration-200 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-400 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="hover:text-gray-400 transition duration-200"
            >
              Menu
            </Link>
          </li>
        </ul>

        <div className="text-lg font-bold">
          <a href="#" className="hover:text-gray-400 transition duration-200">
            LOGO
          </a>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/blogs"
              className="hover:text-gray-400 transition duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/outlets"
              className="hover:text-gray-400 transition duration-200"
            >
              Outlets
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="tel:+1234567890"
            className="hover:text-gray-400 transition duration-200 flex items-center"
          >
            <IoPhonePortraitOutline size={20} className="text-yellow-400" />
            <span className="ml-2 ">+1234567890</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-black py-4 border-t border-gray-800">
          <li>
            <Link
              href="/"
              className="block hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-gray-400 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="block hover:text-gray-400 transition duration-200"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="block hover:text-gray-400 transition duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-gray-400 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
