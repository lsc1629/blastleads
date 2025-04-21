import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const TalkButton = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fondo base naranja */}
      <div className="relative z-10 bg-secondary w-full h-full overflow-hidden rounded-tr-[40px] rounded-br-[40px]">
        {/* Cortina animada azul */}
        <motion.div 
          className="absolute top-0 bottom-0 left-0 right-0 bg-primary z-20 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Contenido del botón */}
        <ScrollLink 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="flex items-center justify-between px-12 py-10 md:py-16 lg:py-20 text-white relative z-30 w-full h-full"
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold">CONTÁCTANOS</span>
          <motion.div 
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white flex items-center justify-center rounded-full text-black shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="md:w-10 md:h-10 lg:w-12 lg:h-12"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default TalkButton;
