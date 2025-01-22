import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="fixed right-4 top-24 z-50 p-3 rounded-full bg-opacity-80 backdrop-blur-sm
        dark:bg-gray-800 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-700 text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
