import AnimationSection from "./AnimationSection";
import { fadeScale } from "../animations/sectionVariants";
export default function Highlights() {
  return (
    <AnimationSection variant={fadeScale}>
      <section className="section">
      <h2>Highlights</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Smart Grid Optimization</h3>
          <p>Industry-aligned ML project at JSW Steel</p>
        </div>

        <div className="project-card">
          <h3>Blockchain Traceability</h3>
          <p>Ethereum smart contracts for supply chain</p>
        </div>

        <div className="project-card">
          <h3>AI Inventory System</h3>
          <p>Forecasting & optimization dashboard</p>
        </div>
      </div>
    </section>
    </AnimationSection>
  );
}
