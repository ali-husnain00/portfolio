import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Info } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
      className="w-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#d6b6ff] border border-[#cfa3ff]"
    >
      {/* Image */}
      <div className="relative w-full px-3 aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-[#d6b6ff] rounded-md"
        />

        {/* Category */}
        {project.category && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-[#ffbd59] text-[#4b1662] rounded-full shadow-sm">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg text-start font-bold text-[#4b1662] mb-3">
          {project.title}
        </h3>

        {/* Links */}
        <div className="flex gap-3 mb-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 text-sm font-medium bg-[#ffbd59] text-[#4b1662] rounded-full hover:bg-yellow-400 transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 text-sm font-medium bg-[#ffbd59] text-[#4b1662] rounded-full hover:bg-yellow-400 transition-colors"
            >
              <Github size={16} /> Code
            </Link>
          )}
        </div>

        {/* Details */}
        <button
          onClick={() => router.push(`/projects/${project.slug}`)}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#ffbd59] text-[#4b1662] font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
        >
          <Info size={18} /> View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
