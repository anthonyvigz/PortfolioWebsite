import React from "react";
import { motion } from "framer-motion";

export default function SkillBlock(props) {
  // variants for word animation
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -55 },
  };
  return (
    <motion.div
      variants={item}
      transition={{
        ease: "easeIn",
        type: "spring",
        stiffness: 100,
      }}
      exit="hidden"
      className="currentBlock"
    >
      <h1 style={{ color: props.block.color }}>{props.block.text}</h1>
    </motion.div>
  );
}
