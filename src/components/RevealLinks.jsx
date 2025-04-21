import React, { useEffect, useState } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';
import { GradientButton } from "./ui/gradient-button";

export const RevealLinks = () => {
  const [scope, animate] = useAnimate();
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["MARKETING DIGITAL", "EFECTIVO"];
  
  useEffect(() => {
    // Animación inicial: cae desde arriba y se posiciona a la derecha
    animate(scope.current, { 
      y: [-200, 0],
      opacity: [0, 1],
    }, { 
      duration: 0.8, 
      ease: "easeOut"
    });

    // Rotación de palabras
    const interval = setInterval(() => {
      setCurrentWord(current => (current + 1) % words.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      ref={scope}
      className="absolute top-0 left-0 h-screen flex items-center pl-16 z-50"
    >
      <section className="grid place-content-center">
        <div className="text-left flex flex-col items-start">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold uppercase tracking-tight leading-tight">
            IMPULSA TU
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold uppercase tracking-tight leading-tight mt-1">
            NEGOCIO CON
          </p>
          
          {/* Contenedor de palabras rotativas */}
          <div className="h-[1.3em] relative mt-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={words[currentWord]}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-tight text-secondary absolute left-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {words[currentWord]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          {/* Texto descriptivo */}
          <div className="mt-40 max-w-lg text-left">
            <p className="text-white text-lg">
              En Blast Leads, transformamos tu presencia online en resultados tangibles. 
              Descubre cómo nuestros servicios pueden atraer más clientes a tu pyme.
            </p>
            
            {/* Botón de contacto */}
            <GradientButton
              className="mt-4" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              CONTÁCTANOS
            </GradientButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase cursor-pointer"
        style={{
          lineHeight: 0.9,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block text-white"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block text-secondary"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default RevealLinks;
