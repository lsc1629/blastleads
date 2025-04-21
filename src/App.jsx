import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

// Componentes de Layout
import Layout from './components/layout/Layout';

// Componentes de Secciones
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TalkSection from './components/sections/TalkSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Efecto para dar tiempo a que Tailwind CSS se cargue completamente
  useEffect(() => {
    // Solo para fines de inicialización de efectos
    const onPageLoad = () => {
      document.documentElement.classList.add('loaded');
    };

    // Comprobar si el documento ya está cargado
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      {/* Barra de progreso de desplazamiento */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TalkSection />
        <TestimonialsSection />
      </Layout>
    </>
  );
}

export default App;
