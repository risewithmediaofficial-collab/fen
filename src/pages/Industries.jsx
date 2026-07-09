import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Star, BadgeCheck, ArrowRight, Search, Building2 } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { industries } from '../data/mockData';
import BookingModal from '../components/ui/BookingModal';

export default function IndustriesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetName, setTargetName] = useState('');
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <Building2 size={13} className="text-[#555555] dark:text-[#CFCFCF]" />
              <span className="text-[#555555] dark:text-[#CFCFCF]">Industry Marketplace</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-[#111111] dark:text-white">
              Krishnagiri Industries
            </h1>
            <p className="text-[#555555] dark:text-[#CFCFCF] text-base mb-6 max-w-lg">
              Discover local manufacturers, industries, and MSMEs. Source products, find jobs, and collaborate.
            </p>
            <div className="relative max-w-xl">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
              <input placeholder="Search industries, products, categories..." className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-black/5 dark:bg-[#0A0A0A] dark:border-white/10 text-[#111111] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950/10 text-sm shadow-sm" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', 'Automobile', 'Textile', 'Agriculture', 'Electrical', 'Manufacturing', 'IT', 'Food & Beverage'].map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
              cat === 'All'
                ? 'bg-[#111111] dark:bg-white text-white dark:text-black border-transparent'
                : 'bg-[#FFFFFF] dark:bg-[#111111] text-[#555555] dark:text-[#CFCFCF] border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20'
            }`}>
              {cat}
            </button>
          ))}
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-12" staggerDelay={0.08}>
          {industries.map((ind) => (
            <motion.div key={ind.id} variants={fadeInUp} className="glass-card-light overflow-hidden transition-all duration-300">
              <div className="p-6 border-b border-black/5 dark:border-white/5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl border border-black/5 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#111111] flex items-center justify-center text-[#555555] dark:text-[#CFCFCF] shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-display font-bold text-base text-[#111111] dark:text-white truncate">{ind.name}</h3>
                      {ind.verified && (
                        <div className="w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                          <span className="text-green-500 text-[8px]">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[#9E9E9E]">{ind.category} · Est. {ind.established}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={11} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs font-semibold text-[#111111] dark:text-white">{ind.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ind.products.map((p) => (
                    <span key={p} className="badge bg-[#F7F7F7] dark:bg-[#111111] text-[#555555] dark:text-[#CFCFCF] border border-black/5 dark:border-white/5 text-[10px]">{p}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#F7F7F7] dark:bg-[#111111] border border-black/5 dark:border-white/5">
                    <div className="text-[9px] text-[#9E9E9E] uppercase tracking-wider mb-0.5">Employees</div>
                    <div className="text-xs font-bold text-[#111111] dark:text-white">{ind.employees}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F7F7F7] dark:bg-[#111111] border border-black/5 dark:border-white/5">
                    <div className="text-[9px] text-[#9E9E9E] uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-xs font-bold text-[#111111] dark:text-white">{ind.location}</div>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {ind.hiring && <span className="badge bg-green-500/10 text-emerald-500 border-0 text-[10px]">Hiring</span>}
                  {ind.internship && <span className="badge bg-[#F7F7F7] text-[#111111] dark:bg-[#111111] dark:text-white border-0 text-[10px]">Internships</span>}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold border border-black/5 dark:border-white/10 text-[#555555] dark:text-[#CFCFCF] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                    View Profile
                  </button>
                  <button
                    onClick={() => {
                      setTargetName(ind.name);
                      setBookingOpen(true);
                    }}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-[#111111] dark:bg-white text-white dark:text-black hover:opacity-90 transition-all"
                  >
                    Send Enquiry / Connect
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Register CTA */}
        <FadeInWhenVisible>
          <div className="py-12 border-t border-black/5 dark:border-white/5 text-center space-y-6">
            <Building2 size={32} className="mx-auto text-[#555555] dark:text-[#CFCFCF]" />
            <h3 className="font-display font-bold text-xl text-[#111111] dark:text-white mb-2">List Your Industry on FEN</h3>
            <p className="text-[#555555] dark:text-[#CFCFCF] text-sm max-w-md mx-auto">
              Join 86+ industries already on FEN. Post jobs, find skilled workers, showcase products, and connect with students.
            </p>
            <div className="flex gap-3 justify-center">
              <button className="btn-primary">Register Your Industry <ArrowRight size={16} /></button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        targetName={targetName}
        targetType="Industry"
      />
    </div>
  );
}
