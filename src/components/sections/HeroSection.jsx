import Lanyard from '../Lanyard';
import ScrollIndicator from '../ScrollIndicator';
import RevealLinks from '../RevealLinks';
import { motion } from 'framer-motion';
import { WavyBackground } from '../ui/wavy-background';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo ondulado con colores corporativos */}
      <div className="absolute inset-0 rounded-bl-[50px] rounded-br-[50px] overflow-hidden">
        <WavyBackground 
          colors={[
            "#1a56db", // Azul primario
            "#2563eb", // Azul medio
            "#3b82f6", // Azul claro
            "#ba784b", // Naranja/secundario
            "#db8a5a"  // Naranja claro
          ]}
          waveWidth={50}
          backgroundFill="#071c4d"
          blur={10}
          speed="slow"
          waveOpacity={0.6}
          containerClassName="rounded-bl-[50px] rounded-br-[50px]"
        />
      </div>

      {/* Contenedor del Lanyard */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Lanyard />
      </div>

      {/* Indicador de scroll */}
      <ScrollIndicator />
      
      {/* Menú de navegación lateral */}
      <RevealLinks />
    </section>
  );
};

export default HeroSection;
