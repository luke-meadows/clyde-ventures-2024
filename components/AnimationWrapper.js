'use client';
import { motion } from 'framer-motion';
export default function AnimationWrapper({ children }) {
  const variants = {
    hidden: { x: 0, y: 100 },
    enter: { x: 0, y: 0 },
    exit: { opacity: 0 },
  };
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'ease', duration: 0.5 }}
      className="mt-24"
    >
      {children}
    </motion.main>
  );
}
