import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChartPie, FaSearch, FaBullhorn, FaStore } from 'react-icons/fa';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  // Estado para controlar qué tarjeta está expandida (0 = primera tarjeta expandida por defecto)
  // Si el valor es -1, significa que ninguna tarjeta tiene hover y debemos mostrar la primera
  const [expandedCard, setExpandedCard] = useState(-1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const caseStudies = [
    {
      icon: <FaSearch />,
      bgColor: "bg-[#f9f3e9]", // Color beige claro
      accentColor: "text-secondary", // Naranja
      title: "Aumenta tu visibilidad",
      highlight: "y atrae más clientes hoy",
      description: "Nuestros servicios están diseñados para maximizar tu presencia en el mercado digital."
    },
    {
      icon: <FaBullhorn />,
      bgColor: "bg-secondary", // Naranja
      accentColor: "text-white",
      title: "Optimiza tu estrategia",
      highlight: "con análisis de datos",
      description: "Utilizamos herramientas avanzadas para medir y mejorar tus resultados constantemente."
    },
    {
      icon: <FaStore />,
      bgColor: "bg-[#f9f3e9]", // Color beige claro
      accentColor: "text-secondary", // Naranja
      title: "Campañas efectivas",
      highlight: "que conectan y convierten",
      description: "Desarrollamos contenido atractivo que resuena con tus clientes y potencia tu marca."
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-primary" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">Impulsa tu negocio con estrategias de marketing digital efectivas y personalizadas.</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 h-[400px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className={`relative overflow-hidden rounded-xl ${study.bgColor} shadow-lg transition-all duration-700 ease-in-out ${expandedCard === index || (expandedCard === -1 && index === 0) ? 'lg:col-span-1 h-[400px]' : 'lg:col-span-1 h-[240px]'}`}
              variants={itemVariants}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(-1)}
            >
              {/* Contenido interno con transición suave */}
              <div className="p-8 h-full flex flex-col">
                <div className={`text-3xl md:text-4xl font-bold mb-2 flex flex-col ${expandedCard === index || (expandedCard === -1 && index === 0) ? 'mt-0' : 'mt-0'} transition-all duration-500`}>
                  <span>{study.title}</span>
                  <span className={study.accentColor}>{study.highlight}</span>
                </div>
                
                {/* Este div se muestra u oculta según el estado */}
                <div className={`mt-4 transition-all duration-700 ease-in-out ${expandedCard === index || (expandedCard === -1 && index === 0) ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  <p className="text-gray-800 text-lg">
                    {study.description}
                  </p>
                </div>
                
                {/* Icono decorativo en la esquina inferior */}
                <div className="absolute bottom-6 right-6 text-5xl opacity-80">
                  {study.icon}
                </div>
                
                {/* Elemento visual - eliminado */}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
