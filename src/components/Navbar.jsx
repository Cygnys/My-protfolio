import { GiGalaxy } from "react-icons/gi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT: Hamburger + Logo */}

      <a href="#home" className="logo">
          <motion.span
            className="logo-icon"
            whileHover={{ scale: 2.15, rotate: 1000 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
          >
            <GiGalaxy />
          </motion.span>
          <span className="logo-text"><a href="#Home">Cygnys</a></span>
        </a>
        
      <div className="navbar-left">
        {/* Hamburger (mobile only via CSS) */}
        <div
          className="hamburger"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Logo */}
        
      </div>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills & Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills & Experience</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
