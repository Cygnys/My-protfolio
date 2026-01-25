import { motion } from "framer-motion";

export default function AnimationSection({ children, variant }) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
}
