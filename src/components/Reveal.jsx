import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — smooth scroll-triggered fade+slide animation
 * 
 * Props:
 *   delay     — animation delay in seconds (default 0)
 *   y         — slide distance in px (default 16)
 *   duration  — animation duration in seconds (default 0.5)
 *   className — additional classes for the wrapper
 */
const Reveal = ({
  children,
  delay = 0,
  y = 16,
  duration = 0.5,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;