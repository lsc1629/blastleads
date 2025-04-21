import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TalkButton from '../ui/talk-button';

const TalkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className="pb-20 pt-0 bg-white" ref={ref}>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <TalkButton className="w-full" />
      </motion.div>
    </section>
  );
};

export default TalkSection;
