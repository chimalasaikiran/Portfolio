"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "AI-Create-Trip",
    description:
      "An AI-powered travel planner built with React, Node.js, Gemini API, and Firebase that dynamically generates personalized itineraries.",
    image: "/ai_trip.png",
    url: "https://ai-create-trip.vercel.app",
  },
  {
    title: "E-commerce Product Page",
    description:
      "Responsive and modern e-commerce UI with hover animations and clean design.",
    image: "/e-com.jpg",
    url: "https://github.com/chimalasaikiran/E-commerce-Product-Page",
  },
  {
    title: "OTT Platform",
    description:
      "A static OTT-style landing page for showcasing movies and shows. Enjoy unlimited content with low prices.",
    image: "/ott.webp",
    url: "https://github.com/chimalasaikiran/OTT-PLAFORM",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-transparent backdrop-blur-xl"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
      >
        My <span className="text-purple-500">Projects</span>
      </h2>

      {/* Responsive Grid for Mobile, Scrollable for Larger Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:overflow-x-auto lg:gap-25 lg:w-max lg:px-30 scrollbar-hide ml-20">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            className="bg-black/60 backdrop-blur-lg border border-purple-800 rounded-2xl shadow-lg w-full max-w-[300px] sm:max-w-[340px] p-4 sm:p-5 mb-6 sm:mb-0 lg:flex-shrink-0"
            tabIndex={0}
            aria-label={`Project: ${project.title}`}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              {project.description}
            </p>
            <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                priority={index === 0} // Prioritize first image for faster loading
              />
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-4 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-purple-200 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={`View ${project.title} project`}
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;