import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { FadeInWhenVisible } from '../ui/AnimationUtils';
import { testimonials } from '../../data/mockData';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="section-padding bg-[#0A0A0A] text-white relative overflow-hidden transition-colors duration-300 border-y border-white/5"
    >
      
      {/* Background Soft Glow & Giant Quote mark */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-500/10 to-transparent blur-[120px] opacity-70 animate-pulse-slow" />
        
        {/* Giant typographic Quote mark */}
        <span className="absolute bottom-[-10%] right-[5%] text-[32rem] font-display font-black text-white/[0.015] leading-none select-none">
          ”
        </span>
      </div>

      <div className="container-max relative z-10">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-24">
          <div className="pill-label mb-4 mx-auto bg-white/5 border-white/5 text-[#CFCFCF]">
            <span>⭐ Testimonials</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Real impact. Real stories.
          </h2>
        </FadeInWhenVisible>

        {/* Option 5: Split Image Left + Quote Right Layout with Cross-fade */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left: Animated Avatar Image Frame */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                
                {/* Outer Glow Ring */}
                <div className={`absolute -inset-4 rounded-full bg-gradient-to-tr ${testimonials[current].color} opacity-30 blur-lg transition-all duration-700`} />
                
                {/* Large Round Avatar Frame */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-5xl sm:text-6xl font-display font-black shadow-premium-dark select-none">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current}
                      initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-tr ${testimonials[current].color} flex items-center justify-center text-white`}
                    >
                      {testimonials[current].avatar}
                    </motion.span>
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Right: Content details quote block */}
            <div className="md:col-span-8 space-y-6 text-center md:text-left flex flex-col justify-center min-h-[220px]">
              
              {/* Quote Mark */}
              <Quote size={32} className="text-[#555555] opacity-40 mx-auto md:mx-0" />

              {/* Quote text crossfade */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="space-y-6"
                  >
                    <p className="text-xl sm:text-2xl text-white font-display font-medium leading-relaxed italic">
                      "{testimonials[current].quote}"
                    </p>

                    {/* Author & Profile details */}
                    <div className="space-y-1">
                      <div className="font-display font-bold text-base text-white">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-[#CFCFCF] font-semibold">
                        {testimonials[current].role}
                      </div>
                      <div className="text-xs text-[#9E9E9E] font-bold uppercase tracking-widest font-mono">
                        {testimonials[current].company}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stars display */}
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

            </div>

          </div>

          {/* Navigation Dots and Progress Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-white/5 relative z-10">
            
            {/* Left/Right Buttons */}
            <div className="flex gap-4 order-2 sm:order-1">
              <button 
                onClick={prev} 
                className="w-10 h-10 rounded-full border border-white/5 hover:border-white/10 text-[#CFCFCF] hover:bg-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={next} 
                className="w-10 h-10 rounded-full border border-white/5 hover:border-white/10 text-[#CFCFCF] hover:bg-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Slider progress ticks */}
            <div className="flex gap-3 order-1 sm:order-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="relative h-1 w-10 bg-white/15 rounded-full overflow-hidden"
                >
                  {/* Slider Progress Bar Overlay */}
                  {i === current && !isHovered && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-white progress-auto"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                    />
                  )}
                  {i === current && isHovered && (
                    <div className="absolute inset-y-0 left-0 bg-white w-full" />
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
