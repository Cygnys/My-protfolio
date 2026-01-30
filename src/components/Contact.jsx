import { useState } from "react";
import AnimationSection from "./AnimationSection";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydnIke-7pg1yMVL3LlrikFAm8ul6tYhasCXCMC5Byy_iDNUZPspEs0s-4xdx4hK7KS/exec";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot
    if (formData.get("company")) return;

    const payload = {
      Name: formData.get("Name"),
      Email: formData.get("Email"),
      Message: formData.get("Message"),
    };

    try {
      setLoading(true);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // ✅ IMPORTANT
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // ✅ Assume success
      setToast("success");
      form.reset();

    } catch (err) {
      console.error(err);
      setToast("error");
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };


  return (
    <AnimationSection disable>
      <section id="contact" className="section contact-section">
        <div className="contact-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2>Contact</h2>
            <p className="contact-sub">
              Let&apos;s build something meaningful together.
            </p>
            <Socials />
          </motion.div>

          {/* RIGHT */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Honeypot */}
            <input type="text" name="company" style={{ display: "none" }} />

            <div className="input-group">
              <input name="Name" className="input" placeholder=" " required />
              <label className="user-label">Name</label>
            </div>

            <div className="input-group">
              <input
                name="Email"
                type="email"
                className="input"
                placeholder=" "
                required
              />
              <label className="user-label">Email</label>
            </div>

            <div className="input-group">
              <textarea
                name="Message"
                className="input"
                placeholder=" "
                required
              />
              <label className="user-label">Message</label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : <span>Send</span>}
            </button>
          </motion.form>
        </div>

        {/* TOAST */}
        <AnimatePresence>
          {toast && (
            <motion.div
              className={`toast ${toast}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              {toast === "success"
                ? "Message sent successfully 🚀"
                : "Something went wrong ❌"}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </AnimationSection>
  );
}
