import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import MathBackground from './MathBackground';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full relative overflow-hidden">
      <MathBackground />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <h2 className="text-5xl sm:text-7xl font-bold mb-4 text-center">
            Vajinder Kaur
          </h2>
          <div className="text-xl sm:text-2xl h-20 text-center font-mono">
            <TypeAnimation
              sequence={[
                'Mathematician',
                2000,
                'Data Scientist',
                2000,
                'Statistical Practitioner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <motion.p 
            className="mt-4 text-center max-w-2xl theorem-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Exploring the intersection of Mathematics, Statistics, and Data Science
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
