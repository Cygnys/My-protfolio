import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import TypingText from "./Typing";

export default function Hero() {
  return (
    <section id="Home"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {/* TEXT */}
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
      >
        <h1>Hi, I&apos;m Kartik 👋</h1>
        <TypingText />
      </motion.div>

      {/* SPLINE WRAPPER (RIGHT SIDE) */}
      <div className="hero-spline">
        <Spline
          scene="https://prod.spline.design/TjuDfVnYnwF0jTI8/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </section>
  );
}
