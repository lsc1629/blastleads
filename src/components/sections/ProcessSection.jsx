import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaChartBar, FaRocket, FaChartLine } from 'react-icons/fa';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      icon: <FaSearch />,
      title: "Análisis",
      description: "Estudiamos tu negocio, competencia y mercado para identificar oportunidades y establecer objetivos claros.",
      color: "from-primary to-primary/70"
    },
    {
      icon: <FaChartBar />,
      title: "Estrategia",
      description: "Diseñamos una estrategia personalizada que combine las mejores tácticas para alcanzar tus objetivos de negocio.",
      color: "from-secondary to-secondary/70"
    },
    {
      icon: <FaRocket />,
      title: "Implementación",
      description: "Ponemos en marcha las acciones planificadas con un seguimiento continuo para optimizar resultados.",
      color: "from-primary to-primary/70"
    },
    {
      icon: <FaChartLine />,
      title: "Resultados",
      description: "Medimos, analizamos y optimizamos constantemente para maximizar el retorno de tu inversión.",
      color: "from-secondary to-secondary/70"
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-primary">Nuestro Proceso</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Metodología probada que nos permite entregar resultados consistentes y escalables para tu negocio.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "80%" } : { height: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:mb-20`}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                {/* Número del paso */}
                <motion.div 
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 mx-auto md:mx-0 mb-6 md:mb-0`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {step.icon}
                </motion.div>

                <motion.div 
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.7, delay: index * 0.2 + 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-primary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            ¡Comienza tu estrategia hoy!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
