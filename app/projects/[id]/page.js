"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Palette,
  Database,
  Globe,
  Calendar,
  User,
  Star,
  Eye,
} from "lucide-react";

// Import your projects data
import { projectsData } from "@/app/components/projectsSection";

const ProjectDetailsPage = ({ params }) => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getProjectImages = (project) => [
    project.image,
    project.image,
    project.image,
  ];

  useEffect(() => {
    if (params?.id) {
      const foundProject = projectsData.find(
        (p) => p.id === parseInt(params.id)
      );
      setProject(foundProject);
      setIsLoading(false);
    }
  }, [params]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] to-[#e0ccff] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4b1662] mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-[#4b1662] text-white rounded-lg hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const projectImages = getProjectImages(project);

  const getTechIcon = (tech) => {
    if (tech.toLowerCase().includes("react"))
      return <Code className="w-5 h-5" />;
    if (
      tech.toLowerCase().includes("css") ||
      tech.toLowerCase().includes("tailwind")
    )
      return <Palette className="w-5 h-5" />;
    if (
      tech.toLowerCase().includes("mongodb") ||
      tech.toLowerCase().includes("database")
    )
      return <Database className="w-5 h-5" />;
    if (tech.toLowerCase().includes("api"))
      return <Globe className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#e0ccff] to-[#f3e8ff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-yellow-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-8">
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-[#4b1662] rounded-lg hover:bg-white transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column - Images */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Image */}
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={projectImages[activeImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Image Thumbnails */}
              <div className="flex gap-3 justify-center">
                {projectImages.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImageIndex === index
                        ? "border-[#ffbd59] shadow-lg"
                        : "border-white/50 hover:border-[#4b1662]/50"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Tech Stack - Moved from right column */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-[#4b1662] mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#4b1662]/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#4b1662",
                        color: "white",
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getTechIcon(tech)}
                      <span className="font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Project Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Title and Category */}
              <div>
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4b1662] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="px-3 py-1 bg-[#4b1662] text-white text-sm rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#4b1662]/70">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{project.developer}</span>
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-xl font-bold text-[#4b1662] mb-3">
                  About This Project
                </h2>
                <p className="text-[#4b1662]/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ffbd59] to-[#ff9a59] text-[#4b1662] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  View Live Demo
                </motion.a>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#4b1662] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Additional Features Section */}
          <motion.div
            className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4b1662] to-[#6b2c91] rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4b1662]">Clean Code</h3>
              </div>
              <p className="text-[#4b1662]/70">
                Well-structured, maintainable code following best practices and
                modern development standards.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ffbd59] to-[#ff9a59] rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4b1662]">
                  Responsive Design
                </h3>
              </div>
              <p className="text-[#4b1662]/70">
                Fully responsive design that works seamlessly across all devices
                and screen sizes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4b1662] to-[#ffbd59] rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4b1662]">
                  Modern Features
                </h3>
              </div>
              <p className="text-[#4b1662]/70">
                Built with the latest technologies and modern development
                practices for optimal performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsPage;
