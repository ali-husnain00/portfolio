"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillData = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" />, color: "bg-orange-100" },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" />, color: "bg-blue-100" },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" />, color: "bg-yellow-100" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" />, color: "bg-cyan-100" },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" />, color: "bg-blue-50" },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" />, color: "bg-gray-200" },
  { name: "Framer Motion", icon: <SiFramer size={40} className="text-pink-500" />, color: "bg-pink-100" },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" />, color: "bg-green-100" },
  { name: "Express", icon: <SiExpress size={40} className="text-gray-700" />, color: "bg-gray-200" },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" />, color: "bg-green-50" },
  { name: "Git", icon: <SiGit size={40} className="text-orange-600" />, color: "bg-orange-100" },
  { name: "GitHub", icon: <FaGithub size={40} className="text-black" />, color: "bg-gray-300" },
  { name: "VS Code", icon: <VscCode size={40} className="text-blue-500" />, color: "bg-blue-100" },
  { name: "Vercel", icon: <SiVercel size={40} className="text-black" />, color: "bg-gray-200" },
];

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-md ${skill.color} w-28 sm:w-32`}
  >
    {skill.icon}
    <span className="text-sm font-medium text-[#4b1662]">{skill.name}</span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-[#d6b6ff] px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#4b1662] inline-block relative mb-16"
        >
          Skills
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#ffbd59] rounded"></span>
        </motion.h2>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillData.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
