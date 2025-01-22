import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="fixed left-4 bottom-4 z-50 w-16 h-16 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src="/vk.svg"
        alt="VK Logo"
        className="w-full h-full filter drop-shadow-lg dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
      />
    </motion.div>
  );
};

export default Logo;
