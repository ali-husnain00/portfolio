"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sliderVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    x: 40,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    x: 40,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const BackendNoteSlider = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonLabel = isOpen ? "Hide Note" : "Show Note";
  const ariaLabel = isOpen
    ? "Hide backend wake-up note"
    : "Show backend wake-up note";

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={isOpen}
        aria-label={ariaLabel}
        className={`fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 text-sm font-medium shadow-lg bg-white/90 text-[#4b1662] border border-[#4b1662]/15 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4b1662]`}
      >
        {buttonLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            role="status"
            aria-live="polite"
            className={`fixed bottom-16 right-4 z-40 max-w-xs sm:max-w-sm rounded-2xl shadow-xl bg-gradient-to-r from-[#4b1662] via-[#6b2c91] to-[#4b1662] text-white px-4 py-3 sm:px-5 sm:py-4 pointer-events-auto border border-white/10 ${poppins.className}`}
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 hidden sm:block h-8 w-1 rounded-full bg-[#ffbd59]" />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                  Note
                </p>
                <p className="text-xs sm:text-sm leading-snug">
                  The backend of full stack projects in this portfolio is hosted on free platforms, so initial load may take a while. Functionality and code quality are fully implemented.
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackendNoteSlider;

