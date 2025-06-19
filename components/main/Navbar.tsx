"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="w-full h-[60px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10"
      aria-label="Main navigation"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo and Portfolio Name */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
          aria-label="Saikiran Portfolio Home"
        >
          <Image
            src="/NavLogo.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin sm:w-[60px] sm:h-[60px]"
          />
          <span className="font-bold ml-2 text-gray-300 hidden sm:block text-sm sm:text-base">
            Saikiran Portfolio
          </span>
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`bg-gray-200 h-1 w-6 mb-1 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`bg-gray-200 h-1 w-6 mb-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`bg-gray-200 h-1 w-6 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row items-center justify-center sm:justify-between absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-[#03001417] sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border-b sm:border-0 border-[#7042f861] sm:h-full sm:mr-10 p-4 sm:p-0`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full sm:w-[300px] lg:w-[400px] h-auto sm:border sm:border-[#7042f861] sm:bg-[#0300145e] sm:px-5 sm:py-2 rounded-full text-gray-200 gap-4 sm:gap-6">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-purple-400 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-purple-400 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-purple-400 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact-me"
              className="cursor-pointer hover:text-purple-400 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex flex-row gap-3 lg:gap-4">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name}`}
              className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
                className="hover:scale-110 transition-transform duration-200 sm:w-[35px] sm:h-[35px]"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;