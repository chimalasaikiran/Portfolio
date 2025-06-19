// sub/ProjectCard.tsx
import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ src, title, description, link }: Props) => (
  <a href={link} target="_blank" rel="noopener noreferrer"
     className="w-[300px] bg-white dark:bg-[#6fb771] rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
    <Image src={src} alt={title} width={300} height={180} className="object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </a>
);

export default ProjectCard;
