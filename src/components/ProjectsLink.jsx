import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectLinks({ github, live }) {
  return (
    <div className="project-links">
      {github && (
        <motion.a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Repository"
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </motion.a>
      )}

      {live && (
        <motion.a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label="Live Project"
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt />
        </motion.a>
      )}
    </div>
  );
}
