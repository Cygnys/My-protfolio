import { useEffect, useRef } from "react";
import AnimationSection from "./AnimationSection";
import { fadeUp } from "../animations/sectionVariants";

export default function About() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!glowRef.current) return;

      const scrollY = window.scrollY;
      // slower movement = more depth
      glowRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimationSection variants={fadeUp}>
      <section id="about" className="section about-section">

        {/* PARALLAX GLOW */}
        <div ref={glowRef} className="blackhole-glow about-glow" />

        <h2>About Me</h2>

        <p className="about-text">
          Information Technology graduate with hands-on experience in
          AI-driven inventory optimization, supply chain systems, and
          full-stack development.
        </p>

        <ul className="about-list">
          <li><b>Location:</b> Thane, India</li>
          <li><b>Focus:</b> AI, Supply Chain, Full-Stack</li>
          <li><b>Interests:</b> System Design, Optimization</li>
        </ul>

      </section>
    </AnimationSection>
  );
}
