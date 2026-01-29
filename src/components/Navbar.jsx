import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
} from "framer-motion";
import blackhole from "/resource/blackhole.png";

const name = "Cygnys".split("");
const totalLetters = name.length;

/* =======================
   LETTER ANIMATION
======================= */
const letterVariants = {
  idle: {
    x: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },

  // Pull IN (left → right)
  pulledIn: (i) => ({
    x: -22 - i * 10,
    scaleX: 1.7,
    scaleY: 0.55,
    opacity: 0,
    transition: {
      delay: 0.4 + i * 0.14,
      duration: 2.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  // Pull OUT (right → left)
  pulledOut: (i) => ({
    x: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: {
      delay: (totalLetters - 1 - i) * 0.08,
      duration: 1.3,
      ease: "easeOut",
    },
  }),
};

/* =======================
   BLACK HOLE ANIMATION
======================= */
const blackHoleVariants = {
  idle: {
    scale: [0.9, 1.25, 0.9],
    rotate: [0, 360], // 👈 real spin
    transition: {
      scale: {
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
      },
      rotate: {
        repeat: Infinity,
        duration: 18,
        ease: "linear",
      },
    },
  },

  hover: {
    scale: 1.5,
    rotate: [0, 360], // 👈 keep spinning on hover
    transition: {
      scale: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
      rotate: {
        repeat: Infinity,
        duration: 6, // faster spin on hover
        ease: "linear",
      },
    },
  },

  // Smooth bridge back to idle
  relax: {
    scale: 1.15,
    rotate: [0, 360],
    transition: {
      scale: {
        duration: 1.2,
        ease: "easeOut",
      },
      rotate: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    },
  },
};


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const letterControls = useAnimationControls();
  const blackHoleControls = useAnimationControls();

  return (
    <nav className="navbar">
      <a href="#Home" className="logo" onClick={() => setOpen(false)}>
        {/* BLACK HOLE */}
        <motion.img
          src={blackhole}
          alt="Cygnys logo"
          className="logo-icon"
          variants={blackHoleVariants}
          initial="idle"
          animate={blackHoleControls}
          onHoverStart={() => {
            letterControls.start("pulledIn");
            blackHoleControls.start("hover");
          }}
          onHoverEnd={() => {
            letterControls.start("pulledOut");
            blackHoleControls.start("relax").then(() => {
              blackHoleControls.start("idle");
            });
          }}
        />

        {/* TEXT */}
        <motion.div className="logo-text">
          {name.map((char, i) => (
            <motion.span
              key={i}
              className="logo-letter"
              variants={letterVariants}
              animate={letterControls}
              initial="idle"
              custom={i}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </a>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills & Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="dropdown-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
