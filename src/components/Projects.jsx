import AnimateSection from "./AnimationSection";
import { fadeRight } from "../animations/sectionVariants";
import ProjectLinks from "./ProjectsLink";

export default function Projects() {
  return (
    <AnimateSection variant={fadeRight}>
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>AI-Driven Inventory & Supply Chain Management</h3>
            <p>
              Full-stack system for demand forecasting, inventory optimization,
              and blockchain-based traceability.
            </p>
            <span>React • Python • ML • Solidity • MySQL</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

          <div className="project-card">
            <h3>Optimized Smart Grid System</h3>
            <p>
              Predictive analytics model to balance energy demand and supply
              with renewable energy prioritization.
            </p>
            <span>Python • Machine Learning • Data Analytics</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

          <div className="project-card">
            <h3>Blockchain Inventory Traceability</h3>
            <p>
              Ethereum smart contracts for transparent and tamper-proof
              inventory transactions.
            </p>
            <span>Solidity • Ethereum • Ganache • Truffle</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

          <div className="project-card">
            <h3>Water Taxi Route Optimization</h3>
            <p>
              Route and scheduling optimization to improve fleet utilization
              and reduce passenger wait time.
            </p>
            <span>Python • Scikit-learn</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

          <div className="project-card">
            <h3>Road Lane Detection</h3>
            <p>
              Computer vision pipeline for detecting lane markings from
              road images and videos.
            </p>
            <span>Python • OpenCV</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

          <div className="project-card">
            <h3>Animal Adoption Platform</h3>
            <p>
              Full-stack web application with admin dashboard for managing
              pet adoption workflows.
            </p>
            <span>HTML • CSS • JavaScript • PHP • MySQL</span>

            <ProjectLinks
              github="https://github.com/Cygnys"
              live="https://cygnys.github.io/My-protfolio/"
            />
          </div>

        </div>
      </section>
    </AnimateSection>
  );
}
