import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <motion.div
      className="floating-socials"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.a whileHover={{ x: 6 }} href="https://github.com/Cygnys" target="_blank">
        <FaGithub />
      </motion.a>

      <motion.a whileHover={{ x: 6 }} href="https://www.linkedin.com/in/kartik-p-428534203" target="_blank">
        <FaLinkedin />
      </motion.a>

      <motion.a whileHover={{ x: 6 }} href="mailto:patilkartik890@gmail.com" target="_blank">
        <FaEnvelope />
      </motion.a>
    </motion.div>
  );
}
