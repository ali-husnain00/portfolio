import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4b1662] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#ffbd59]">Ali Husnain</h2>
          <p className="text-sm text-gray-200 mt-2">
            Full-stack developer | MERN | React.js | Next.js  
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#ffbd59]">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#projects" className="hover:text-[#d6b6ff] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#d6b6ff] transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#d6b6ff] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://github.com/ali-husnain00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffbd59] transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/ali-husnain00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffbd59] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:alihusnain68786@gmail.com"
            className="hover:text-[#ffbd59] transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Ali Husnain. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
