import { Github, Laptop, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4b1662] text-white py-10 px-6">

      {/* Bottom - Copyright */}
      <div className="mt-10 max-w-6xl mx-auto flex justify-between flex-wrap gap-3 items-center border-t border-white/20 pt-6 text-center text-sm text-gray-300">
      <h1 className="flex items-center gap-2 text-[#ffbd59] font-bold text-2xl lg:text-3xl cursor-pointer">
          <Laptop className="w-8 h-10" />
          Ali husnain
        </h1>
        © {new Date().getFullYear()} Ali Husnain. All Rights Reserved.
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
    </footer>
  );
};

export default Footer;
