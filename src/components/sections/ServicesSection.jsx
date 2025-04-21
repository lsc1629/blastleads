import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import TextParallaxContent from '../TextParallaxContent';
import { GradientButton } from '../ui/gradient-button';

const ServicesSection = () => {
  const services = [
    {
      imgUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Marketing Digital",
      heading: "Estrategias que impulsan tu negocio",
      description: "Nuestras estrategias integrales de marketing digital están diseñadas para aumentar tu visibilidad online y generar resultados medibles para tu negocio. Combinamos técnicas avanzadas de SEO, SEM, y análisis de datos para maximizar tu ROI y alcanzar a tu audiencia ideal.",
      listItems: [
        "Análisis completo de tu presencia online",
        "Plan estratégico personalizado",
        "Seguimiento constante de resultados",
        "Optimización continua de campañas"
      ]
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "SEO y Contenido",
      heading: "Posiciónate en los primeros resultados",
      description: "Optimizamos tu sitio web para que sea encontrado en los motores de búsqueda y atraiga tráfico orgánico de calidad. Creamos contenido relevante y valioso que no solo posiciona tu marca, sino que también genera confianza y autoridad en tu industria.",
      listItems: [
        "Auditoría SEO completa",
        "Optimización on-page y off-page",
        "Estrategia de contenidos",
        "Construcción de enlaces de calidad"
      ]
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Social Media",
      heading: "Conecta con tu audiencia",
      description: "Nuestra gestión profesional de redes sociales está enfocada en aumentar tu comunidad, engagement y conversiones. Creamos estrategias personalizadas para cada plataforma, adaptando el contenido a los formatos y audiencias específicas de cada red social.",
      listItems: [
        "Gestión integral de perfiles",
        "Creación de contenido adaptado",
        "Campañas publicitarias optimizadas",
        "Análisis de resultados y optimización"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="py-20 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">Nuestros Servicios</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Ofrecemos soluciones de marketing digital personalizadas para impulsar tu negocio y conseguir resultados tangibles.
        </p>
      </div>
      
      {services.map((service, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={service.imgUrl}
          subheading={service.subheading}
          heading={service.heading}
        >
          <ServiceContent 
            description={service.description} 
            listItems={service.listItems} 
          />
        </TextParallaxContent>
      ))}
      

    </section>
  );
};

const ServiceContent = ({ description, listItems }) => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
    <div className="mb-10">
      <h3 className="text-5xl font-bold md:text-6xl lg:text-7xl text-primary uppercase tracking-wide text-left mb-10">
        ¿CÓMO LO HACEMOS?
      </h3>
    </div>
    <div className="">
      <p className="mb-10 text-2xl text-neutral-600 md:text-3xl leading-relaxed">
        {description}
      </p>
      <GradientButton
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="w-full text-xl md:text-2xl md:w-fit inline-flex items-center gap-2"
      >
        Quiero saber más <FiArrowUpRight />
      </GradientButton>
    </div>
  </div>
);

export default ServicesSection;
