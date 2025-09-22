"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    liveLink: "https://ghost-movies-app.vercel.app",
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
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const categoryButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotateX: -90 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const backgroundVariants = {
    initial: {
      background: "linear-gradient(135deg, #f3e8ff 0%, #e0ccff 50%, #f3e8ff 100%)",
    },
    animate: {
      background: [
        "linear-gradient(135deg, #f3e8ff 0%, #e0ccff 50%, #f3e8ff 100%)",
        "linear-gradient(135deg, #e0ccff 0%, #f3e8ff 50%, #e0ccff 100%)",
        "linear-gradient(135deg, #f3e8ff 0%, #e0ccff 50%, #f3e8ff 100%)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden px-8 lg:px-16 py-20"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-yellow-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-yellow-200/30 to-purple-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4b1662] inline-block relative mb-4"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(75, 22, 98, 0.3)",
            }}
          >
            My Projects
            <motion.span
              className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-[#ffbd59] via-[#ff9a59] to-[#ffbd59] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg text-[#4b1662]/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover my journey through code, creativity, and innovation
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              variants={categoryButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden group ${
                activeCategory === cat
                  ? "bg-[#4b1662] text-white shadow-lg shadow-[#4b1662]/30"
                  : "bg-white/80 backdrop-blur-sm text-[#4b1662] hover:bg-white border border-[#4b1662]/20"
              }`}
            >
              {/* Hover gradient background */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#ffbd59] to-[#ff9a59] opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Active category background */}
              {activeCategory === cat && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#4b1662] via-[#6b2c91] to-[#4b1662]"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Category text */}
              <span className="relative z-20">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid with stagger animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="group"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Show All Projects Button */}
        {projectsData.length > 6 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => router.push("/projects")}
              className="relative px-8 py-4 bg-gradient-to-r from-[#ffbd59] to-[#ff9a59] text-[#4b1662] font-bold rounded-full text-lg overflow-hidden group shadow-xl shadow-[#ffbd59]/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 189, 89, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4b1662] to-[#6b2c91] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="relative z-10 group-hover:text-white transition-colors duration-300"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                View All Projects
              </motion.span>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                whileHover={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-6 h-6 bg-[#ffbd59] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-4 h-4 bg-[#4b1662] rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.section>
  );
};

export default ProjectsSection;