"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="relative z-30 w-full min-h-screen bg-transparent backdrop-blur-lg py-20 px-6 md:px-20 text-gray-900 dark:text-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/10 dark:bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-white">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/pic.png"
              alt="Saikiran profile photo"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg object-cover border border-gray-500"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex-1 text-white">
            <p className="text-lg leading-relaxed">
              Hey there! I&apos;m <span className="font-semibold">Saikiran Chimala</span>, a
              passionate <span className="text-purple-400">Full Stack Developer</span> and aspiring
              <span className="text-purple-400"> AI Engineer</span> from Andhra Pradesh, India.
              I’m currently pursuing my B.Tech in CSE (AI) and love building intuitive,
              high-performance web applications with modern tech like
              <span className="font-medium"> Next.js, Tailwind CSS, and Framer Motion</span>.
            </p>
            <p className="mt-4 text-lg">
              My projects combine frontend delight with backend logic, and I enjoy
              implementing intelligent features using <span className="font-medium">Machine Learning</span> and
              <span className="font-medium"> NLP</span>.
            </p>
            <p className="mt-4 text-lg">
              When I’m not coding, I enjoy exploring tech trends, mentoring juniors,
              and crafting portfolio projects that solve real-world problems.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 z-50 relative">
              <a
                href="https://www.linkedin.com/in/chimala-saikiran/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chimalasaikiran"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition font-semibold cursor-pointer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
