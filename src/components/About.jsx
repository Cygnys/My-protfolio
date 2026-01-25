import AnimationSection from "./AnimationSection";
import { fadeUp } from "../animations/sectionVariants";

export default function About() {
  return (
    <AnimationSection variants={fadeUp}>
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
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
