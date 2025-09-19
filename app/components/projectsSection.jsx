"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProjectCard from "./projectCard";

export const projectsData = [
  {
    id: 1,
    title: "E-BooksShelf (E-Library)",
    description:
      "E-BooksShelf is a responsive React.js web app that lets users search, browse, and preview books using the Google Books API. It features category filters, detailed previews, and external book links, all managed with Context API.",
    techStack: ["React Js", "CSS", "Google Books API"],
    developer: "Ali Husnain",
    image: "/project1.png",
    githubLink: "https://github.com/ali-husnain00/E-library",
    liveLink: "https://ebooksshelf.netlify.app/",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Ali Mart",
    description:
      "Ali Mart is an online shopping platform crafted to provide customers with a smooth and enjoyable shopping experience. The website showcases a diverse range of products, intuitive navigation, and secure payment options, ensuring a hassle-free journey from browsing to checkout.",
    techStack: ["React Js", "CSS"],
    developer: "Ali Husnain",
    image: "/project3.png",
    githubLink: "https://github.com/ali-husnain00/ali-mart",
    liveLink: "https://alimart.netlify.app/",
    category: "Frontend",
  },
  {
    id: 3,
    title: "EvoChat",
    description:
      "EvoChat is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for live messaging. It allows users to sign up, create conversations, send/receive messages instantly, and manage chats in a clean, responsive UI.",
    techStack: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Socket.io"],
    developer: "Ali Husnain",
    image: "/project4.png",
    githubLink: "https://github.com/ali-husnain00/EvoChat",
    liveLink: "https://evochat1.netlify.app/",
    category: "Fullstack",
  },
  {
    id: 4,
    title: "Codask",
    description:
      "Codask is a real-time collaborative code editor with integrated project and task management. Users can create projects, invite team members, chat in groups, and collaboratively edit code using socket.io. Team leads assign tasks and track project progress seamlessly.",
    techStack: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "MongoDB", "Socket.io"],
    developer: "Ali Husnain",
    image: "/project5.png",
    githubLink: "https://github.com/ali-husnain00/Codask",
    liveLink: "https://codask.netlify.app/",
    category: "Fullstack",
  },
  {
    id: 5,
    title: "My Portfolio",
    description:
      "Personal portfolio to showcase projects, skills, and contact info, built with Gatsby and content managed via Contentful.",
    techStack: ["Next Js", "Tailwind CSS", "Framer Motion"],
    developer: "Ali Husnain",
    image: "/project7.png",
    githubLink: "https://github.com/ali-husnain00/portfolio",
    liveLink: "#",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Movies App",
    description: "A modern movie discovery application built with Next.js that fetches real-time data from the TMDB API. The app allows users to explore trending, latest, and top-rated movies with rich details including posters, ratings, genres, and descriptions. It features a responsive design for seamless use across devices, smooth navigation powered by Next.js routing, and optimized performance with server-side rendering.",
    techStack: ["Next Js", "Tailwind CSS", "TMDB API"],
    developer: "Ali Husnain",
    image: "/project8.png",
    githubLink: "https://github.com/ali-husnain00/Movies-Application",
    liveLink: "ghost-movies-app.vercel.app",
    category: "Frontend",
  },
  {
    id: 7,
    title: "VendorBay",
    description: "VendorBay is a responsive multi-vendor e-commerce platform where users can shop and sellers manage their shops. It features lazy loading and React Suspense for performance, image compression with Sharp, and backend pagination. Admins manage users, sellers, and products with full control.",
    techStack: ["React Js", "CSS", "Node Js", "Express Js", "MongoDB"],
    developer: "Ali Husnain",
    image: "/project6.png",
    githubLink: "https://github.com/ali-husnain00/VendorBay",
    liveLink: "https://vendorbay1.netlify.app/",
    category: "Frontend",
  },
];


const categories = ["All", "Frontend", "Backend", "Fullstack"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

    const router = useRouter();

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section id="projects" className="bg-[#f3e8ff] px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#4b1662] inline-block relative mb-10"
        >
          Projects
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#ffbd59] rounded"></span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-[#4b1662] text-white"
                  : "bg-[#d6b6ff] text-[#4b1662] hover:bg-[#cfa3ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Show All Projects Button */}
        {projectsData.length > 6 && (
          <div className="mt-12">
            <button onClick={() => router.push("/projects")} className="px-6 py-3 bg-[#ffbd59] text-[#4b1662] font-semibold rounded-lg hover:scale-105 transition-transform">
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
