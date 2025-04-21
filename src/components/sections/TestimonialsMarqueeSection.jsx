import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Marquee from '../ui/marquee';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Ana Martínez",
      position: "CEO, Innovatech",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "BlastLead ha transformado nuestra presencia digital. Hemos incrementado nuestras conversiones en un 150% en solo 3 meses. Su enfoque estratégico y atención personalizada los hace únicos.",
      stars: 5
    },
    {
      name: "Carlos Ruiz",
      position: "Director de Marketing, EcoSoluciones",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "Después de trabajar con varias agencias, finalmente encontramos a BlastLead. Su enfoque en resultados reales y su capacidad para entender nuestro negocio ha generado un impacto significativo en nuestra empresa.",
      stars: 5
    },
    {
      name: "Laura Fernández",
      position: "Fundadora, StyleHome",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      text: "Como emprendedora, valoró enormemente el apoyo estratégico que BlastLead ha brindado a mi negocio. Han sabido posicionar mi marca en un mercado competitivo y generar leads de calidad consistentemente.",
      stars: 5
    },
    {
      name: "Javier Morales",
      position: "Gerente General, ConstructGroup",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "La estrategia de marketing digital implementada por BlastLead nos ayudó a conectar con clientes potenciales que antes no podíamos alcanzar. Su servicio profesional y resultados concretos han superado nuestras expectativas.",
      stars: 4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const TestimonialCard = ({ testimonial }) => (
    <motion.div 
      className="bg-white/15 backdrop-blur-lg p-8 rounded-lg border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-center hover:bg-white/20 transition-all duration-300 mx-4 min-w-[380px] md:min-w-[400px] flex flex-col h-full"
      variants={itemVariants}
    >
      <FaQuoteLeft className="text-3xl text-secondary mb-6 mx-auto" />
      
      <p className="text-lg mb-6 text-white/90 flex-grow">{testimonial.text}</p>
      
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar 
            key={i} 
            className={`text-xl ${i < testimonial.stars ? 'text-secondary' : 'text-white/30'}`} 
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center mt-auto">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-[0_0_15px_rgba(186,120,75,0.5)]"
        />
        <div className="ml-4 text-left">
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-white/70">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="section-padding bg-primary text-white overflow-hidden py-24" ref={ref}>
      <div className="container-custom mb-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">Testimonios de Clientes</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Descubre lo que nuestros clientes dicen sobre nuestro trabajo y resultados.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Elementos decorativos */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-xl"></div>
        
        {/* Primera fila de marquee (dirección izquierda) */}
        <Marquee 
          direction="left" 
          speed={40}
          pauseOnHover={true}
          className="mb-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </Marquee>
        
        {/* Segunda fila de marquee (dirección derecha) */}
        <Marquee 
          direction="right" 
          speed={30}
          pauseOnHover={true}
        >
          {[...testimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
