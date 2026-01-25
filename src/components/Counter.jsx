import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import AnimationSection from "./AnimationSection";
import { fadeUp } from "../animations/sectionVariants";

function AnimatedNumber({ value }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      onViewportEnter={() => {
        motionValue.set(0); // reset on re-enter
        animate(motionValue, value, {
          duration: 2.2, // ⬅️ slower & smoother
          ease: "easeOut",
        });
      }}
      viewport={{ once: false, amount: 0.4 }}
    >
      {display}
    </motion.span>
  );
}

export default function Counters() {
  return (
    <AnimationSection variant={fadeUp}>
      <section className="section counters">

        <motion.div>
          <h3><AnimatedNumber value={6} />+</h3>
          <p>Projects</p>
        </motion.div>

        <motion.div>
          <h3><AnimatedNumber value={2} /></h3>
          <p>Internships</p>
        </motion.div>

        <motion.div>
          <h3><AnimatedNumber value={3} />+</h3>
          <p>Domains</p>
        </motion.div>

      </section>
    </AnimationSection>
  );
}
