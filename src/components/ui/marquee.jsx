import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useAnimation, useMotionValue } from 'framer-motion';

export const Marquee = ({
  children,
  direction = 'left',
  speed = 50,
  pauseOnHover = false,
  className = '',
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    const contentWidth = content.offsetWidth;
    
    const animate = async () => {
      const directionMultiplier = direction === 'left' ? -1 : 1;
      const distance = directionMultiplier * contentWidth;
      
      // Reset position to create seamless loop
      x.set(0);
      
      controls.start({
        x: distance,
        transition: {
          duration: contentWidth / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    };
    
    animate();
    
    const resizeObserver = new ResizeObserver(() => {
      animate();
    });
    
    resizeObserver.observe(content);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [direction, speed, controls, x]);
  
  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ position: 'relative' }}
    >
      <motion.div
        ref={contentRef}
        animate={controls}
        style={{ x, display: 'inline-flex' }}
        className="py-4"
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
