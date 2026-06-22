import React from "react";
import { motion } from "framer-motion";

const PosterFlower = ({ size = 100, className, ...props }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    style={{ width: size, height: size }}
    className={className}
    {...props}
  >
    {/* Star-like flower shape inspired by the poster design */}
    <path
      d="M50 0 C53 38, 62 38, 100 50 C62 50, 62 62, 50 100 C47 62, 38 62, 0 50 C38 50, 38 38, 50 0 Z"
      className="text-slate-300"
    />
    <path
      d="M50 15 C52 42, 58 42, 85 50 C58 50, 58 58, 50 85 C48 58, 42 58, 15 50 C42 50, 42 42, 50 15 Z"
      className="text-rose-400"
      opacity="0.6"
    />
  </svg>
);

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1 - Crimson/Wine */}
      <motion.div
        className="absolute top-[10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-athena-wine/40 to-athena-maroon/20 blur-[95px]"
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

      {/* Glow Blob 2 - Rose/Maroon */}
      <motion.div
        className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-athena-maroon/30 to-athena-pink/15 blur-[105px]"
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

      {/* Glow Blob 3 - Crimson/Rose */}
      <motion.div
        className="absolute bottom-[8%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-athena-crimson/35 to-athena-wine/25 blur-[90px]"
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

      {/* Floating Blurred Poster Flower 1 (Top Left) */}
      <motion.div
        className="absolute top-[8%] left-[5%] opacity-[0.22] blur-[4px]"
        animate={{
          y: [0, 25, -20, 0],
          x: [0, -15, 15, 0],
          rotate: [0, 45, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PosterFlower size={140} />
      </motion.div>

      {/* Floating Blurred Poster Flower 2 (Mid Right) */}
      <motion.div
        className="absolute top-[42%] right-[4%] opacity-[0.25] blur-[5px]"
        animate={{
          y: [0, -30, 25, 0],
          x: [0, 20, -10, 0],
          rotate: [0, -60, 40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PosterFlower size={160} />
      </motion.div>

      {/* Floating Blurred Poster Flower 3 (Bottom Left) */}
      <motion.div
        className="absolute bottom-[15%] left-[8%] opacity-[0.18] blur-[3px]"
        animate={{
          y: [0, 20, -15, 0],
          x: [0, 10, -20, 0],
          rotate: [0, 30, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PosterFlower size={110} />
      </motion.div>

      {/* Floating Blurred Poster Flower 4 (Top Right) */}
      <motion.div
        className="absolute top-[18%] right-[15%] opacity-[0.15] blur-[6px]"
        animate={{
          y: [0, -15, 20, 0],
          x: [0, -10, 15, 0],
          rotate: [0, 90, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PosterFlower size={90} />
      </motion.div>
    </div>
  );
}
