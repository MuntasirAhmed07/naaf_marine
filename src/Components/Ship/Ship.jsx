import React from "react";
import "./ship.css";
import Svg from "./Svg";
import { motion } from "framer-motion";

export default function Box() {
  const boxVariant = {
    hidden: {
      x: "-110vh"
    },
    visible: {
      x: "0",
      transition: {
        duration: 4
      }
    }
  };

  const svgVariant = {
    straight: {
      rotate: 0
    },
    rotateNow: {
      rotate: -25,
      transition: {
        delay: 4,
        duration: 1
      }
    }
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        <motion.div
          className="svg-wrapper"
          variants={svgVariant}
          animate="rotateNow"
          initial="straight"
        >
          <Svg />
        </motion.div>
      </motion.div>
    </div>
  );
}
