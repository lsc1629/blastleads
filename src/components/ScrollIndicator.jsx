import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className="text-white/80 mb-2 text-sm">Desplázate para explorar</p>
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full p-1 flex justify-center"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ 
              y: [0, 14, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
