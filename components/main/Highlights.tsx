// components/Highlights.tsx
"use client";

import React from "react";
import Image from "next/image";

const certifications = [
  {
    platform: "IBM",
    title: "Full stack software Developer",
    icon: "/ibm.png",
    description:
      "Completed an in-depth training program covering frontend, backend, databases, and DevOps. Built and deployed full-stack web applications using modern tools."
  },
  {
    platform: "Infosys",
    title: "Database and Sql",
    icon: "/infosys.svg",
    description:
      "Gained expertise in writing complex SQL queries, understanding data models, and managing relational databases through the Infosys Springboard platform."
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "/github.svg",
    link: "https://github.com/chimalasaikiran",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/chimala-saikiran/",
  },
  {
    name: "LeetCode",
    icon: "/leetcode.svg",
    link: "https://leetcode.com/u/SAIKIRAN_2/",
  },
  {
    name: "HackerRank",
    icon: "/hackerrank.svg",
    link: "https://www.hackerrank.com/profile/chimalasaikiran2",
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="w-full px-6 md:px-20 py-20 bg-transparent backdrop-blur-xl text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          🎓 Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">🎖️ Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#1a1a1a]/60 p-4 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={cert.icon}
                      alt={cert.title}
                      width={28}
                      height={28}
                    />
                    <div>
                      <h4 className="font-semibold cursor-default">{cert.title}</h4>
                      <p className="text-sm text-gray-400 cursor-default">{cert.platform}</p>
                    </div>
                  </div>
                  {cert.description && (
                    <p className="text-sm text-gray-300 mt-2 md:mt-0 md:ml-12 cursor-default">
                      {cert.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">🔗 Connect With Me</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-purple-200 transition cursor-pointer"
              >
                <Image src={social.icon} alt={social.name} width={20} height={20} />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
