import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import TypingText from "./Typing";

export default function Hero() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Text above Spline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 10,
          top: "40%",
          left: "5%",
          color: "white",
        }}
        className="hero-text"
      >
        <h1>Hi, I&apos;m Cygnys 👋</h1>
        <TypingText />
      </motion.div>

      {/* Spline Canvas (NO animation) */}
      <Spline
        scene="https://prod.spline.design/TjuDfVnYnwF0jTI8/scene.splinecode"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
}
