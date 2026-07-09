import { motion } from 'framer-motion';
import { AnimatedCounter, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
import { stats } from '../../data/mockData';

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] text-white border-y border-white/5 overflow-hidden transition-colors duration-300">
      
      {/* Background soft glow orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-violet-500/10 to-transparent blur-[100px] opacity-70 animate-pulse-slow" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 divide-y lg:divide-y-0 lg:divide-x divide-white/5" staggerDelay={0.06}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className={`flex flex-col items-center justify-between text-center pt-8 lg:pt-0 ${
                index % 2 === 0 ? 'border-t-0' : ''
              } lg:border-t-0`}
            >
              {/* Animated number counter */}
              <div className="relative group">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white select-none">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                
                {/* Micro underline highlight */}
                <span className="absolute bottom-[-6px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>

              {/* Label */}
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#9E9E9E] font-bold mt-4 max-w-[140px] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
