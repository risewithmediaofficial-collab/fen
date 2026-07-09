import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   AnimatedCounter — count up on scroll
───────────────────────────────────────────── */
export function AnimatedCounter({ end, suffix = '', duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * end;
      setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FadeInWhenVisible — fade + slide up
───────────────────────────────────────────── */
export function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   BlurReveal — blur + fade in
───────────────────────────────────────────── */
export function BlurReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(12px)', y: 15 }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(12px)', y: 15 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SlideInFromSide — slide from left or right
───────────────────────────────────────────── */
export function SlideInFromSide({ children, direction = 'left', delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const xInit = direction === 'left' ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInit }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInit }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ScaleReveal — scale up from slightly smaller
───────────────────────────────────────────── */
export function ScaleReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   StaggerContainer — stagger children
───────────────────────────────────────────── */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   fadeInUp — variant for children
───────────────────────────────────────────── */
export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

/* ─────────────────────────────────────────────
   fadeInScale — variant for children
───────────────────────────────────────────── */
export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};
