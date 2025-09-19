"use client";
import { useEffect, useState } from "react";
import { Menu, X, Home, User, Mail, Send, Laptop } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav
      className={`w-full h-20 flex justify-between items-center px-6 md:px-12 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#4b1662]/50 backdrop-blur-md shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <h1 className="flex items-center gap-2 text-[#ffbd59] font-bold text-2xl lg:text-3xl cursor-pointer">
        <Laptop className="w-8 h-10" />
        Ali husnain
      </h1>

      {/* Desktop Menu */}
      <ul
        className={`hidden lg:flex gap-8 items-center px-8 py-2 rounded-3xl backdrop-blur-md transition ${
          "bg-white/10 text-white"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.name}
            onClick={() => setActive(link.name)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition ${
              active === link.name
                ? "bg-[#ffbd59] text-black"
                : "hover:text-[#ffbd59]"
            }`}
          >
            {link.icon}
            {link.name}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffbd59] text-[#4b1662] font-semibold shadow-lg hover:shadow-[#ffbd59]/50 hover:scale-105 transition cursor-pointer">
        <Send size={18} />
        Get in touch
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden cursor-pointer">
        <Menu
          size={28}
          onClick={() => setIsOpen(true)}
          className={scrolled ? "text-black" : "text-white"}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#502865] text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-6 py-5 border-b border-white/20">
          <X
            size={26}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-6 mt-6 px-6">
          {links.map((link) => (
            <li
              key={link.name}
              onClick={() => {
                setActive(link.name);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition ${
                active === link.name
                  ? "bg-[#ffbd59] text-black"
                  : "hover:text-[#ffbd59]"
              }`}
            >
              {link.icon}
              {link.name}
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <button className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#ffbd59] text-[#4b1662] font-semibold shadow-lg hover:shadow-[#ffbd59]/50 hover:scale-105 transition cursor-pointer">
            <Send size={18} />
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
