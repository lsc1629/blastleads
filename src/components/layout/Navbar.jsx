import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Servicios', to: 'services' },
    { name: 'Proceso', to: 'process' },
    { name: 'Testimonios', to: 'testimonials' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="/logo-blastlead.png" alt="BlastLead" className="h-16" />
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          className="hidden md:flex space-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`font-bold text-lg cursor-pointer hover:text-secondary transition-colors ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contact" className="btn-primary">
            ¡Impulsa tu negocio!
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="bg-white/90 backdrop-blur-md shadow-lg absolute top-full left-0 w-full py-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 px-6">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-bold text-primary text-lg hover:text-secondary block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="btn-primary inline-block mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ¡Impulsa tu negocio!
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
