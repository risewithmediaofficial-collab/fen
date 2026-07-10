import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Building2, BookOpen, Star } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { BlurReveal, FadeInWhenVisible } from '../ui/AnimationUtils';

export default function HeroSection() {
  const { isAuthenticated } = useAuth();

  // Network node animations
  const nodes = [
    { x: '15%', y: '20%', label: 'Student', size: 'w-10 h-10', delay: 0, initialY: -10 },
    { x: '80%', y: '15%', label: 'Mentor', size: 'w-12 h-12', delay: 0.5, initialY: 15 },
    { x: '70%', y: '75%', label: 'Industry', size: 'w-14 h-14', delay: 1, initialY: -20 },
    { x: '20%', y: '80%', label: 'Government', size: 'w-11 h-11', delay: 1.5, initialY: 10 },
    { x: '50%', y: '50%', label: 'FEN Core', size: 'w-16 h-16', delay: 2, initialY: 0, isCenter: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0A0A0A] text-[#111111] dark:text-white transition-colors duration-300">
      
      {/* Background Mesh Gradients & Soft Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-80 dark:opacity-90 transition-opacity duration-500 animate-gradient-shift bg-[length:200%_200%]" />
        
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-600/5 blur-[140px] mix-blend-screen animate-pulse-slow animation-delay-400" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle Vignette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-[#0A0A0A] to-transparent pointer-events-none z-10" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Premium Typography & Editorial Content */}
          <div className="lg:col-span-7 space-y-10 text-center flex flex-col items-center">
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-black/5 dark:bg-white/5 dark:border-white/5 text-xs font-semibold tracking-wide shadow-soft dark:shadow-soft-dark mx-auto"
            >
              <Zap size={13} className="text-[#8b5cf6] animate-pulse" />
              <span className="text-[#555555] dark:text-[#CFCFCF]">FEN — Krishnagiri's Entrepreneur Network</span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping-slow" />
            </motion.div>

            {/* Premium Typography Heading with Word-by-Word Animation */}
            <div className="space-y-4 text-center">
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-[#111111] dark:text-white text-center">
                <BlurReveal delay={0.1} className="inline-block mr-3">Build</BlurReveal>
                <BlurReveal delay={0.2} className="inline-block mr-3">Your</BlurReveal>
                <BlurReveal delay={0.3} className="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500">Future.</BlurReveal>
                <br />
              </h1>
            </div>

            {/* Subheading with Comfort line height & line wrap balance */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg leading-[1.75] text-[#555555] dark:text-[#CFCFCF] max-w-xl font-normal text-balance mx-auto text-center"
            >
              Connect. Learn. Grow. Build Your Network with FEN.
            </motion.p>

            {/* Call to Actions with Slide & Lift Animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 justify-center pt-2"
            >
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary group">
                  Go to Dashboard 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ) : 
              (
                <>
                  <Link to="/register" className="btn-primary group">
                    Join FEN Free 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link to="/mentorship" className="btn-secondary hover:shadow-soft dark:hover:shadow-soft-dark">
                    Explore Opportunities
                  </Link>
                </>
              )}
            </motion.div>

            {/* Simple Horizontal Stats list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-10 border-t border-black/[0.06] dark:border-white/[0.06] w-full"
            >
              {[
                { label: 'Active Members', value: '1,240+', icon: Users },
                { label: 'Regional Industries', value: '86+', icon: Building2 },
                { label: 'Placements Secured', value: '180+', icon: Star },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black/[0.02] dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/5">
                    <Icon size={14} className="text-[#8b5cf6] dark:text-violet-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-bold text-[#111111] dark:text-white leading-none mb-1">{value}</div>
                    <div className="text-xs text-[#9E9E9E]">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Premium Boxless Floating Ecosystem Visualization */}
          <div className="lg:col-span-5 relative h-[500px] w-full hidden lg:flex items-center justify-center">
            
            {/* SVG Connecting Lines between floating nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <motion.line
                x1="15%" y1="20%" x2="50%" y2="50%"
                stroke="rgba(139, 92, 246, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.line
                x1="80%" y1="15%" x2="50%" y2="50%"
                stroke="rgba(139, 92, 246, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.line
                x1="70%" y1="75%" x2="50%" y2="50%"
                stroke="rgba(139, 92, 246, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
              <motion.line
                x1="20%" y1="80%" x2="50%" y2="50%"
                stroke="rgba(139, 92, 246, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
            </svg>

            {/* Glowing Center Ring */}
            <div className="absolute w-48 h-48 rounded-full border border-violet-500/10 dark:border-violet-500/20 bg-gradient-radial from-violet-500/5 to-transparent blur-md pointer-events-none animate-pulse-slow" />

            {/* Floating Nodes */}
            {nodes.map((node, index) => (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center z-10"
                style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [node.initialY, -node.initialY, node.initialY]
                }}
                transition={{
                  opacity: { duration: 0.6, delay: node.delay },
                  scale: { duration: 0.6, delay: node.delay },
                  y: {
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Node Orb with premium gradient and blur */}
                <div className={`relative ${node.size} rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-115 cursor-pointer shadow-soft dark:shadow-soft-dark
                  ${node.isCenter 
                    ? 'bg-gradient-to-tr from-violet-500 to-indigo-600 text-white' 
                    : 'bg-white/80 dark:bg-[#111111]/85 border border-black/5 dark:border-white/10 text-[#111111] dark:text-white backdrop-blur-md'
                  }`}
                >
                  <span className="font-display font-bold text-xs">
                    {node.label.charAt(0)}
                  </span>
                  
                  {/* Subtle outer pulse effect */}
                  {node.isCenter && (
                    <span className="absolute -inset-2 rounded-full border border-violet-500/25 animate-ping-slow pointer-events-none" />
                  )}
                </div>

                {/* Node Label Text */}
                <span className="mt-2 text-[10px] font-bold tracking-wider uppercase text-[#9E9E9E] dark:text-[#CFCFCF] bg-white/50 dark:bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  {node.label}
                </span>
              </motion.div>
            ))}

            {/* Ambient glowing float shape in the background */}
            <motion.div 
              animate={{ 
                x: [0, 15, -10, 0],
                y: [0, -20, 15, 0],
                rotate: [0, 45, 90, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 bg-gradient-to-tr from-cyan-400/10 to-violet-500/10 blur-2xl rounded-full z-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
