import React from "react";
import { motion } from "framer-motion";

export default function WorkPiece(props) {
  // variants for word animation
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -55 },
  };
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="imgBlock"
    >
      <img width="300" src={props.piece.imagelink} alt={props.index} />
      <div className="overlay" style={{ backgroundColor: props.piece.color }}>
        <div className="pieceInfo">HELLO</div>
      </div>
    </motion.div>
  );
}
