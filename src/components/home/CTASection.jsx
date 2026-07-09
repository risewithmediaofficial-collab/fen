import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { FadeInWhenVisible } from '../ui/AnimationUtils';

export default function CTASection() {
  return (
    <section className="section-padding bg-[#0A0A0A] text-white relative overflow-hidden transition-colors duration-300 border-t border-white/5">
      
      {/* Background Soft Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-mesh-dark opacity-90 animate-gradient-shift bg-[length:200%_200%]" />
        
        {/* Spot ambient highlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-[140px] opacity-80" />
      </div>

      <div className="container-max relative z-10 max-w-3xl mx-auto text-center space-y-10">
        
        {/* Animated Rocket Icon Node */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shadow-premium-dark select-none animate-float">
          <Rocket size={22} className="text-violet-400" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] glow-heading text-balance">
            Ready to build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">your future?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CFCFCF] max-w-xl mx-auto leading-[1.75] font-normal text-balance">
            Join 1,240+ students, 86+ regional industries, and 48+ expert mentors already accelerating together on FEN in Krishnagiri District.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link to="/register" className="btn-primary group hover:shadow-glow-violet dark:bg-white dark:text-black">
            Join FEN Free 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link to="/mentorship" className="btn-secondary hover:bg-white/5">
            Learn More
          </Link>
        </div>

        {/* Fine Footer Note */}
        <p className="text-xs text-[#9E9E9E] font-medium tracking-wide">
          Free registration · Zero-commitment access · Krishnagiri, Tamil Nadu
        </p>

      </div>
    </section>
  );
}
