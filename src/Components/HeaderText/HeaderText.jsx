import React from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../Components/AnimatedText/AnimatedText";
import {
  leftSlide,
  rightSlide,
  leftSlideAgent
} from "../../Components/Animations";
import "./headerText.css";

const HeaderText = () => {
  return (
    <section>
      <div className="text-container">
        <div className="inline">
          <motion.span
            variants={leftSlide}
            initial="inPosition"
            animate="outPosition"
          >
            <AnimatedTextWord text="MORE " />
          </motion.span>
          <motion.span
            variants={rightSlide}
            initial="inPosition"
            animate="outPosition"
          >
            <AnimatedTextWord text="THAN " />
          </motion.span>
        </div>
        <motion.div
          className="inline"
          variants={rightSlide}
          initial="inPosition"
          animate="outPosition"
        >
          <AnimatedTextWord text="JUST   A   PORT " />
        </motion.div>
        <motion.div
          className="inline"
          variants={leftSlideAgent}
          initial="inPosition"
          animate="outPosition"
        >
          <AnimatedTextWord text="AGENT " />
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderText;
