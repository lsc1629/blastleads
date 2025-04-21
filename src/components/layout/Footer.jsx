import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-primary text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <motion.div 
            className="col-span-1 md:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <img src={logo} alt="BlastLead" className="h-12 mb-4" />
            <p className="mt-4 text-sm opacity-80">
              Impulsa tu negocio con estrategias de marketing digital efectivas y personalizadas. Potencia tu presencia online y aumenta tus conversiones.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-sm opacity-80 hover:opacity-100 cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-sm opacity-80 hover:opacity-100 cursor-pointer"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="services" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-sm opacity-80 hover:opacity-100 cursor-pointer"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="testimonials" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-sm opacity-80 hover:opacity-100 cursor-pointer"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-sm opacity-80 hover:opacity-100 cursor-pointer"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80 hover:opacity-100">Marketing Digital</li>
              <li className="text-sm opacity-80 hover:opacity-100">SEO</li>
              <li className="text-sm opacity-80 hover:opacity-100">Social Media</li>
              <li className="text-sm opacity-80 hover:opacity-100">Email Marketing</li>
              <li className="text-sm opacity-80 hover:opacity-100">Google Ads</li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">contacto@blastlead.com</li>
              <li className="text-sm opacity-80">+56 9 1234 5678</li>
              <li className="text-sm opacity-80">Santiago, Chile</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-12 py-6 text-center text-sm opacity-70"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
        >
          © {year} BlastLead. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
