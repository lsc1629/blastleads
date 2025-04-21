import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [overSecondaryBg, setOverSecondaryBg] = useState(false);
  
  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Servicios', to: 'services' },
    { name: 'Testimonios', to: 'testimonials' },
    { name: 'Contacto', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Mostrar el menú hamburguesa solo cuando estemos debajo del hero
        setShowMenu(heroRect.bottom <= 0);
      }
      
      // Verificar si el botón está sobre una sección con fondo azul primario
      const menuButton = document.querySelector('.mobile-menu-button');
      if (menuButton) {
        const buttonRect = menuButton.getBoundingClientRect();
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        
        // Obtener el elemento en las coordenadas del centro del botón
        const elementAtPoint = document.elementFromPoint(buttonCenterX, buttonCenterY);
        if (elementAtPoint) {
          // Buscar el ancestro más cercano que sea una sección
          let section = elementAtPoint;
          while (section && section.tagName !== 'SECTION') {
            section = section.parentElement;
          }
          
          if (section) {
            // Verificar si la sección tiene fondo naranja secundario
            const sectionBg = window.getComputedStyle(section).backgroundColor;
            const isSecondaryBg = sectionBg.includes('186, 120, 75') || // RGB del color secondary (naranja)
                               section.classList.contains('bg-secondary');
            setOverSecondaryBg(isSecondaryBg);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Ejecutar inmediatamente para el estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Si estamos cerrando el menú, desactivar el blur aplicando overflow-auto al body
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 right-8 z-50"
          >
            <button
              onClick={toggleMenu}
              className={`mobile-menu-button flex items-center justify-center w-20 h-20 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 relative ${overSecondaryBg ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              style={{
                boxShadow: overSecondaryBg ? '0 0 25px 5px rgba(14, 40, 87, 0.6)' : '0 0 25px 5px rgba(186, 120, 75, 0.6)'
              }}
            >
              {isOpen ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay con blur cuando el menú está abierto */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Menú vertical */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 18, stiffness: 150, mass: 1.2 }}
            className="fixed top-0 right-0 h-full w-80 md:w-96 lg:w-[30rem] bg-primary z-50 flex flex-col justify-center items-center text-white p-8 shadow-2xl rounded-l-3xl"
          >
            <div className="absolute top-8 right-8">
              <button 
                onClick={toggleMenu} 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Cerrar menú"
              >
                <FiX className="text-4xl" />
              </button>
            </div>
            
            <nav className="flex flex-col items-end space-y-6 w-full pr-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <MenuFlipLink 
                    to={link.to} 
                    onClick={handleLinkClick}
                  >
                    {link.name.toUpperCase()}
                  </MenuFlipLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const MenuFlipLink = ({ children, to, onClick }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider font-bold cursor-pointer"
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

export default MobileMenu;
