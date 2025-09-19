"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";

// Reusable Flip Card Component
const FlipCard = () => {
  return (
    <div className="w-72 sm:w-80 h-96 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front of Card */}
        <div className="absolute  bg-[#502865] w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 backface-hidden">
          <img
            src="/mypic.png"
            alt="Ali Husnain"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full rounded-2xl bg-[#4b1662] text-white flex flex-col justify-center items-center p-6 shadow-xl border border-[#ffbd59] [transform:rotateY(180deg)] backface-hidden">
          <div className="w-30 h-30 rounded-full border-2 border-[#ffbd59] overflow-hidden">
            <img src="/mypic.png" className="w-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold mt-2">Ali Husnain</h3>
          <p className="mt-2 text-[#ffbd59] font-semibold">
            Full Stack Developer
          </p>
          <p className="mt-3 text-sm text-white/80 text-center">
            MERN | Next.js | Tailwind | Framer Motion
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://pk.linkedin.com/in/ali-husnain00"
              target="_blank"
              className="p-2 rounded-full bg-[#ffbd59] text-[#4b1662] hover:scale-110 transition cursor-pointer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ali-husnain00"
              target="_blank"
              className="p-2 rounded-full bg-[#ffbd59] text-[#4b1662] hover:scale-110 transition cursor-pointer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#f3e8ff] flex justify-center px-8 lg:px-16 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4b1662] relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#ffbd59] rounded"></span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I’m{" "}
            <span className="text-[#4b1662] font-semibold">Ali Husnain</span>, a
            passionate
            <span className="text-[#4b1662]"> Full Stack Developer</span> from
            Pakistan, currently pursuing a
            <span className="text-[#4b1662] font-semibold">
              {" "}
              BS in Software Engineering
            </span>
            . I specialize in building fast, scalable, and user-friendly
            applications with modern technologies.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            My expertise includes the{" "}
            <span className="text-[#4b1662]">MERN Stack</span>,
            <span className="text-[#4b1662]"> Next.js</span>,
            <span className="text-[#4b1662]"> Tailwind CSS</span>, and
            <span className="text-[#4b1662]"> Framer Motion</span>. I love
            creating sleek, responsive interfaces combined with powerful backend
            logic, always exploring new tools to deliver production-ready,
            future-proof solutions.
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/mycv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffbd59] text-[#4b1662] font-semibold shadow-md hover:shadow-lg transition"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Side - Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-max"
        >
          <FlipCard />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
