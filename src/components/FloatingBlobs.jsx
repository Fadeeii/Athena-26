import React from "react";
import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1 - Light Blue */}
      <motion.div
        className="absolute top-[10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-athena-blue/35 to-athena-purple/20 blur-[90px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Blob 2 - Purple/Pink */}
      <motion.div
        className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-athena-purple/35 to-athena-pink/25 blur-[100px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 90, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Blob 3 - Soft Teal/Blue */}
      <motion.div
        className="absolute bottom-[8%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-athena-blue/30 to-athena-purple/20 blur-[85px]"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 50, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
