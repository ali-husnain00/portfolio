"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, Home, User, Mail, Send, Laptop, FolderKanban } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update active state based on current pathname
  useEffect(() => {
    if (!isClient) return;
    
    const currentPath = pathname || "/";
    if (currentPath === "/") {
      setActive("Home");
    } else if (currentPath.startsWith("/about")) {
      setActive("About");
    } else if (currentPath.startsWith("/projects")) {
      setActive("Projects");
    } else if (currentPath.startsWith("/contact")) {
      setActive("Contact");
    }
  }, [pathname, isClient]);

  // Enhanced scroll handler with debouncing and hide/show functionality
  const handleScroll = useCallback(() => {
    if (!isClient) return;
    
    const currentScrollY = window.scrollY;
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Debounce scroll updates
    timeoutRef.current = setTimeout(() => {
      setScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    }, 10);
  }, [lastScrollY, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll, isClient]);

  // Close sidebar when clicking outside
  useEffect(() => {
    if (!isClient) return;
    
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isClient]);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isClient) return;
    
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isClient]);

  // Prevent render on server-side to avoid hydration issues
  if (!isClient) {
    return null;
  }

  const links = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "About", icon: <User size={18} />, href: "/about" },
    { name: "Projects", icon: <FolderKanban size={18} />, href: "/projects" },
    { name: "Contact", icon: <Mail size={18} />, href: "/contact" },
  ];

  const handleLinkClick = (linkName, href) => {
    setActive(linkName);
    setIsOpen(false);
    
    // Add a small delay to allow for smooth transitions
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  const handleLogoClick = () => {
    setActive("Home");
    router.push("/");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setActive("Contact");
    setIsOpen(false);
    setTimeout(() => {
      router.push("/contact");
    }, 100);
  };

  return (
    <>
      {/* Backdrop overlay for mobile sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <nav
        className={`w-full h-20 flex justify-between items-center px-6 md:px-12 fixed top-0 z-50 transition-all duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled 
            ? "bg-[#4b1662]/80 backdrop-blur-md text-black shadow-lg" 
            : "bg-[#4b1662]/50 backdrop-blur-md text-black"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-[#ffbd59] font-bold text-2xl lg:text-3xl cursor-pointer transition-transform hover:scale-105 focus:outline-none rounded-lg p-1"
          tabIndex={0}
          role="button"
          aria-label="Go to homepage"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLogoClick();
            }
          }}
        >
          <Laptop className="w-8 h-10" aria-hidden="true" />
          <span>Ali husnain</span>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-8 items-center px-8 py-2 rounded-3xl backdrop-blur-md transition bg-white/10 text-white`}
          role="menubar"
          aria-label="Desktop navigation menu"
        >
          {links.map((link) => (
            <li key={link.name} role="none">
              <Link
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-50 ${
                  active === link.name
                    ? "bg-[#ffbd59] text-black scale-105"
                    : "hover:text-[#ffbd59] hover:scale-105"
                }`}
                role="menuitem"
                aria-current={active === link.name ? "page" : undefined}
              >
                <span aria-hidden="true">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleContactClick}
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffbd59] text-[#4b1662] font-semibold shadow-lg hover:shadow-[#ffbd59]/50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-75 cursor-pointer"
          aria-label="Contact me"
        >
          <Send size={18} aria-hidden="true" />
          <span>Get in touch</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden cursor-pointer p-2 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-50"
          onClick={() => setIsOpen(true)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-sidebar"
        >
          <Menu
            size={28}
            className={scrolled ? "text-white" : "text-white"}
            aria-hidden="true"
          />
        </button>

        {/* Mobile Sidebar */}
        <aside
          ref={sidebarRef}
          id="mobile-sidebar"
          className={`fixed top-0 right-0 h-[100vh] w-64 bg-[#502865] text-white transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/20">
            <h2 id="mobile-menu-title" className="text-lg font-semibold sr-only">
              Mobile Navigation Menu
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer p-2 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-50"
              aria-label="Close menu"
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>
          
          <nav role="navigation" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-6 mt-6 px-6" role="menu">
              {links.map((link) => (
                <li key={link.name} role="none">
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-50 ${
                      active === link.name
                        ? "bg-[#ffbd59] text-black"
                        : "hover:text-[#ffbd59] hover:bg-white/10"
                    }`}
                    role="menuitem"
                    aria-current={active === link.name ? "page" : undefined}
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="px-6 mt-8">
            <button
              onClick={handleContactClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#ffbd59] text-[#4b1662] font-semibold shadow-lg hover:shadow-[#ffbd59]/50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd59] focus:ring-opacity-75 cursor-pointer"
              aria-label="Contact me"
            >
              <Send size={18} aria-hidden="true" />
              <span>Get in touch</span>
            </button>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;