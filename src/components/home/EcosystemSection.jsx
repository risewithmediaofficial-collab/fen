import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
import { userTypes } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Network, GraduationCap, Users, School, 
  Building2, Store, Rocket, Building, Coins, Briefcase
} from 'lucide-react';

const iconMap = {
  1: GraduationCap,
  2: Users,
  3: School,
  4: Building2,
  5: Store,
  6: Rocket,
  7: Building,
  8: Coins,
  9: School,
  10: Briefcase
};

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState(1);

  // Group user types for better semantic layout
  const learners = userTypes.filter(type => [1, 3, 5, 9, 10].includes(type.id));
  const providers = userTypes.filter(type => [2, 4, 6, 7, 8].includes(type.id));

  // Find active stakeholder data
  const currentStakeholder = userTypes.find(type => type.id === activeTab) || userTypes[0];
  const StakeholderIcon = iconMap[currentStakeholder.id] || GraduationCap;

  return (
    <section className="section-padding bg-white text-[#111111] dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-gradient-radial from-violet-500/5 to-transparent blur-[80px]" />
      </div>

      <div className="container-max relative z-10">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-20">
          <div className="pill-label mb-4 mx-auto">
            <Network size={13} className="text-[#8b5cf6]" />
            <span>One Ecosystem. Infinite Scale.</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#111111] dark:text-white tracking-tight text-balance">
            Who is FEN for?
          </h2>
          <p className="text-[#555555] dark:text-[#CFCFCF] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-4 font-normal text-balance">
            Connecting every stakeholder in the regional economy — from students starting out to government organizations driving growth.
          </p>
        </FadeInWhenVisible>

        {/* Premium Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          
          {/* Left Column: Stakeholder List (typographic tabs) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              
              {/* Learners Group */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-[#9E9E9E] font-bold pb-3 border-b border-black/5 dark:border-white/5 mb-4">
                  Seekers &amp; Learners
                </h3>
                <div className="space-y-1">
                  {learners.map((type) => {
                    const Icon = iconMap[type.id] || GraduationCap;
                    const isActive = activeTab === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setActiveTab(type.id)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-[#F7F7F7] dark:bg-white/5 font-semibold text-violet-500 dark:text-violet-400'
                            : 'hover:bg-[#F7F7F7]/50 dark:hover:bg-white/2 text-[#555555] dark:text-[#CFCFCF] hover:text-[#111111] dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className={isActive ? 'text-violet-500 dark:text-violet-400' : 'text-[#9E9E9E]'} />
                          <span className="text-sm">{type.label}</span>
                        </div>
                        <span className="text-xs font-mono text-[#9E9E9E]">{type.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Providers Group */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-[#9E9E9E] font-bold pb-3 border-b border-black/5 dark:border-white/5 mb-4">
                  Providers &amp; Enablers
                </h3>
                <div className="space-y-1">
                  {providers.map((type) => {
                    const Icon = iconMap[type.id] || GraduationCap;
                    const isActive = activeTab === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setActiveTab(type.id)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-[#F7F7F7] dark:bg-white/5 font-semibold text-violet-500 dark:text-violet-400'
                            : 'hover:bg-[#F7F7F7]/50 dark:hover:bg-white/2 text-[#555555] dark:text-[#CFCFCF] hover:text-[#111111] dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className={isActive ? 'text-violet-500 dark:text-violet-400' : 'text-[#9E9E9E]'} />
                          <span className="text-sm">{type.label}</span>
                        </div>
                        <span className="text-xs font-mono text-[#9E9E9E]">{type.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Stakeholder Details Visual Panel */}
          <div className="lg:col-span-5 sticky top-28 bg-[#F7F7F7] dark:bg-[#111111] rounded-3xl p-8 border border-black/5 dark:border-white/5 overflow-hidden min-h-[300px] flex flex-col justify-between shadow-soft dark:shadow-soft-dark">
            
            {/* Visual background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6 relative z-10"
              >
                {/* Large visual badge/icon */}
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 flex items-center justify-center text-violet-500 dark:text-violet-400 shadow-sm">
                  <StakeholderIcon size={24} />
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-black text-2xl text-[#111111] dark:text-white">
                    For {currentStakeholder.label}
                  </h4>
                  <p className="text-sm text-[#9E9E9E] font-semibold tracking-wider font-mono">
                    Total Ecosystem Count: {currentStakeholder.count}
                  </p>
                </div>

                <p className="text-[#555555] dark:text-[#CFCFCF] text-base leading-relaxed">
                  {currentStakeholder.desc}. FEN offers custom dashboards, matching engines, and regional communication tools to optimize workflows and collaboration.
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center relative z-10">
              <span className="text-xs text-[#9E9E9E]">Interactive Guide</span>
              <Link to="/register" className="text-xs font-bold text-violet-500 dark:text-violet-400 flex items-center gap-1 hover:underline">
                Get started today <ArrowRight size={12} />
              </Link>
            </div>

          </div>

        </div>

        {/* How it Works Section (Timeline Redesign) */}
        <div className="pt-24 border-t border-black/5 dark:border-white/5">
          <FadeInWhenVisible className="text-center mb-20">
            <h3 className="font-display font-black text-3xl text-[#111111] dark:text-white tracking-tight">
              How FEN Works
            </h3>
            <p className="text-[#555555] dark:text-[#CFCFCF] text-sm mt-3">
              A frictionless journey mapping regional synergy.
            </p>
          </FadeInWhenVisible>

          <div className="relative">
            {/* Timeline Line Connector */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-black/5 dark:bg-white/5 -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: '01', title: 'Onboard Profile', desc: 'Create your stake: specify credentials, targets, and regional objectives.' },
                { step: '02', title: 'Synthesize Connections', desc: 'Engage matching protocols to automatically match with mentors, seekers, or jobs.' },
                { step: '03', title: 'Sunday Training', desc: 'Join regular offline workshops at the District Industries Centre.' },
                { step: '04', title: 'Unlock Placements', desc: 'Deploy talent metrics to unlock government-backed jobs, schemes, or funding.' },
              ].map((item, index) => (
                <div key={item.step} className="space-y-4 text-left relative group">
                  
                  {/* Timeline Node Ring */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0A0A0A] border-2 border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#111111] dark:text-white transition-colors duration-300 group-hover:border-violet-500">
                      {item.step}
                    </div>
                    
                    <h4 className="font-display font-bold text-lg text-[#111111] dark:text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#555555] dark:text-[#CFCFCF] leading-relaxed pl-14 lg:pl-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
