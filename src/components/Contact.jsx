import AnimationSection from "./AnimationSection";
import { motion } from "framer-motion";
import Socials from "./Socials";

export default function Contact() {
  return (
    <AnimationSection disable>
      <section id="contact" className="section contact-section">
        <div className="contact-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Contact</h2>
            <p className="contact-sub">
              Let’s build something meaningful together.
            </p>
            <Socials />
          </motion.div>

          {/* RIGHT */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </motion.form>

        </div>
      </section>
    </AnimationSection>
  );
}
