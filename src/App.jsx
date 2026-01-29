import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Counters from "./components/Counter";
import FloatingSocials from "./components/FloatingSocials";

/* =====================
   STAR DUST BACKGROUND
===================== */
function StarDust() {
  return <div className="star-dust-layer" />;
}

export default function App() {

  /* =====================
     SCROLL PARALLAX EFFECT
  ===================== */
  useEffect(() => {
    let latestScrollY = 0;
    let ticking = false;

    const update = () => {
      const dust = document.querySelector(".star-dust-layer");
      if (dust) {
        // slower movement = depth
        dust.style.transform = `translateY(${latestScrollY * 0.12}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FULL PAGE MOVING STAR DUST */}
      <StarDust />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Highlights />
      <Counters />
      <Contact />
      <FloatingSocials />
    </>
  );
}
