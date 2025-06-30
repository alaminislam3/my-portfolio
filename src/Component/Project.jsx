import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BillSwifft",
    description: "BillSwift.com is a modern web application designed to simplify bill management and payments for users. ",
    image: "https://i.ibb.co/215Wzmw5/Bill-Shift.png",
    live: "https://billswift-1132b.web.app",
    github: "https://github.com/alaminislam3/BillSwift",
    details: "#",
  },
  {
    title: "Leaftrack",
    description: "LeafTrack is a modern web application designed to help plant enthusiasts manage and track their plants with ease.",
    image: "https://i.ibb.co/Q7gNmF2J/leaftrack.png",
    live: "https://practice-firebase-auth-9e8cd.web.app",
    github: "https://github.com/alaminislam3/LeafTrack",
    details: "#",
  },
  {
    title: "Learnify",
    description: "A full-stack web application where users can read, post, and manage articles easily.",
    image: "https://i.ibb.co/jvC4cZbD/Learnify.png",
    live: "https://learnify-500d1.web.app",
    github: "https://github.com/alaminislam3/Learnify",
    details: "#",
  },
];

const Project = () => {
  return (
    <section id="project" className="bg-[#d9cabf] px-6 py-16 lg:px-24 text-[#333]">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap justify-center lg:justify-start">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#FD6E0A] text-white"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#FD6E0A] text-white flex items-center gap-2"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>
                <a
                  href={project.details}
                  className="btn bg-[#FD6E0A] text-white"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
