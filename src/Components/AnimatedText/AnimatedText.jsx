import React from "react";
import { motion } from "framer-motion";
import "./animatedText.css";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4,
        type: "spring",
        damping: 12,
        stiffness: 80
      }
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        delay: 4,
        type: "spring",
        damping: 12,
        stiffness: 80
      }
    }
  };

  return (
    <motion.div
      className="anmation-wrapper"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
