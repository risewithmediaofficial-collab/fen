import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
import { mentors } from '../../data/mockData';

export default function MentorsSection() {
  return (
    <section className="section-padding bg-[#F7F7F7] text-[#111111] dark:bg-[#111111] dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Soft Spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-gradient-radial from-violet-500/5 to-transparent blur-[90px]" />
      </div>

      <div className="container-max relative z-10">
        
        {/* Header Section */}
        <FadeInWhenVisible className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-20">
          <div>
            <div className="pill-label mb-4">
              <span className="text-[#555555] dark:text-[#CFCFCF]">🧑‍🏫 Expert Advisors</span>
            </div>
            <h2 className="font-display font-black text-4xl text-[#111111] dark:text-white tracking-tight">
              Learn from the best
            </h2>
            <p className="text-[#555555] dark:text-[#CFCFCF] mt-3 text-base font-normal max-w-md">
              Industry veterans and technical specialists from your region ready to guide you step-by-step.
            </p>
          </div>
          <Link to="/mentorship" className="btn-secondary group shrink-0">
            View All Mentors 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </FadeInWhenVisible>

        {/* Circular Profiles Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-10 w-full" staggerDelay={0.06}>
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              variants={fadeInUp}
              className="flex flex-col items-center text-center space-y-5 group"
            >
              
              {/* Circular Avatar with Hover Glowing Ring & Pulse */}
              <div className="relative shrink-0 select-none">
                
                {/* Glow Ring Behind Avatar on Hover */}
                <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr ${mentor.color} opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300`} />
                
                {/* Real Ring Wrapper */}
                <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#0A0A0A] flex items-center justify-center text-3xl font-display font-black shadow-soft dark:shadow-soft-dark group-hover:scale-105 transition-transform duration-300 ease-in-out`}>
                  
                  {/* Colorful Text Avatar initials */}
                  <span className={`bg-gradient-to-br ${mentor.color} bg-clip-text text-transparent`}>
                    {mentor.avatar}
                  </span>

                  {/* Pulsing Available Status Tag */}
                  {mentor.available && (
                    <div className="absolute bottom-1 right-1 flex items-center justify-center">
                      <span className="absolute w-3.5 h-3.5 bg-green-500 rounded-full animate-ping opacity-75" />
                      <span className="relative w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#111111]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Identity Info */}
              <div className="space-y-1.5 min-w-0">
                <h3 className="font-display font-bold text-base text-[#111111] dark:text-white truncate">
                  {mentor.name}
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#CFCFCF] truncate max-w-[200px]">
                  {mentor.title}
                </p>
                <div className="text-[10px] text-[#9E9E9E] font-bold uppercase tracking-wider">
                  {mentor.company}
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-[#9E9E9E] max-w-[200px] line-clamp-2 leading-relaxed">
                {mentor.bio}
              </p>

              {/* Simple Stats tag */}
              <div className="flex justify-center items-center gap-2.5 text-[11px] text-[#9E9E9E] font-medium">
                <span className="flex items-center gap-0.5 font-bold text-[#111111] dark:text-white">
                  <Star size={11} className="text-amber-400 fill-amber-400 mr-0.5" />
                  {mentor.rating}
                </span>
                <span>·</span>
                <span>{mentor.sessions} sessions</span>
              </div>

              {/* Book session link */}
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-500 dark:text-violet-400 group/link pt-1"
              >
                Book Session 
                <ArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform duration-250" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
