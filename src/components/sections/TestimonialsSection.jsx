import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialCard } from '../ui/testimonial-card';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const testimonials = [
    {
      author: {
        name: "Ana Martínez",
        handle: "CEO, Innovatech",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      text: "BlastLead ha transformado nuestra presencia digital. Hemos incrementado nuestras conversiones en un 150% en solo 3 meses. Su enfoque estratégico y atención personalizada los hace únicos."
    },
    {
      author: {
        name: "Carlos Ruiz",
        handle: "Director de Marketing, EcoSoluciones",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      text: "Después de trabajar con varias agencias, finalmente encontramos a BlastLead. Su enfoque en resultados reales y su capacidad para entender nuestro negocio ha generado un impacto significativo en nuestra empresa."
    },
    {
      author: {
        name: "Laura Fernández",
        handle: "Fundadora, StyleHome",
        avatar: "https://randomuser.me/api/portraits/women/64.jpg"
      },
      text: "Como emprendedora, valoró enormemente el apoyo estratégico que BlastLead ha brindado a mi negocio. Han sabido posicionar mi marca en un mercado competitivo y generar leads de calidad consistentemente."
    },
    {
      author: {
        name: "Javier Morales",
        handle: "Gerente General, ConstructGroup",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
      },
      text: "La estrategia de marketing digital implementada por BlastLead nos ayudó a conectar con clientes potenciales que antes no podíamos alcanzar. Su servicio profesional y resultados concretos han superado nuestras expectativas."
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

  return (
    <section id="testimonials" className="bg-white text-primary overflow-hidden py-12 sm:py-24 md:py-32 px-0" ref={ref}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <motion.div 
          className="flex flex-col items-center gap-4 px-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-[720px] text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
            Testimonios de Clientes
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-500 sm:text-xl">
            Descubre lo que nuestros clientes dicen sobre nuestro trabajo y resultados.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
