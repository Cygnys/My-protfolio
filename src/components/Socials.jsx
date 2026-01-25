import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Socials() {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Cygnys",
      label: "GitHub",

    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/kartik-p-428534203",
      label: "LinkedIn",

    },
    {
      icon: <FaEnvelope />,
      link: "mailto:patilkartik890@gmail.com",
      label: "Email",
    },
    {
      icon: <FaFilePdf />,
      link: "./public/KartikPatilResume2.pdf",
      label: "Resume",
    },
  ];

  return (
    <div className="socials">
      {icons.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          data-tooltip={item.label}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
