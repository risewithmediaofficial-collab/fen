import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Search } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { mentors } from '../data/mockData';
import BookingModal from '../components/ui/BookingModal';

export default function MentorshipPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetName, setTargetName] = useState('');
  const [targetId, setTargetId] = useState('');

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <span className="text-[#555555] dark:text-[#CFCFCF]">Mentorship</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
                Find Your Mentor
              </h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-6 max-w-lg">
              Connect with experienced professionals for career guidance, startup mentoring, and skill development
            </p>
            <div className="relative max-w-xl">
              <input
                placeholder="Search by name, skill, or expertise..."
                className="w-full pl-4 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 text-sm"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* How it works */}
        <FadeInWhenVisible className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { step: '01', label: 'Browse Mentors', desc: 'Filter by expertise, location, and availability' },
            { step: '02', label: 'Book a Session', desc: 'Choose time slot — video call or offline meeting' },
            { step: '03', label: 'Start Learning', desc: 'Get personalized guidance and track progress' },
          ].map(({ step, label, desc }) => (
            <div key={label} className="glass-card-light p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 text-gray-500 font-bold text-sm bg-white dark:bg-dark-800">
                {step}
              </div>
              <div>
                <div className="font-display font-bold text-sm text-gray-900 dark:text-white">{label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </FadeInWhenVisible>

        {/* Filter Chips */}
        <FadeInWhenVisible className="flex flex-wrap gap-2 mb-8">
          {['All', 'Entrepreneurship', 'Technology', 'Digital Marketing', 'MSME', 'Career', 'Funding', 'Available Now'].map((f) => (
            <button
              key={f}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                f === 'All'
                  ? 'bg-gray-900 text-white border-transparent dark:bg-white dark:text-gray-900'
                  : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-400'
              }`}
            >
              {f}
            </button>
          ))}
        </FadeInWhenVisible>

        {/* Mentor Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={fadeInUp} className="glass-card-light overflow-hidden group hover:shadow-glow-sm transition-all duration-300">
             <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-800 flex items-center justify-center text-gray-900 dark:text-white font-bold text-xl shrink-0">
                    {mentor.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base text-gray-900 dark:text-white truncate">{mentor.name}</h3>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{mentor.title}</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${mentor.available ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                      <span className={`text-[10px] font-medium ${mentor.available ? 'text-emerald-500' : 'text-gray-400'}`}>
                        {mentor.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">{mentor.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mentor.expertise.map((s) => (
                    <span key={s} className="badge-primary text-[10px]">{s}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pb-4 mb-4 border-b border-gray-100 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>Rating: <strong className="text-gray-900 dark:text-white">{mentor.rating}</strong></span>
                  <span>·</span>
                  <span>{mentor.sessions} sessions</span>
                  <span>·</span>
                  <span>{mentor.students} students</span>
                  <span className="ml-auto">{mentor.location}</span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                    View Profile
                  </button>
                  <button
                    disabled={!mentor.available}
                    onClick={() => {
                      setTargetName(mentor.name);
                      setTargetId(mentor.id);
                      setBookingOpen(true);
                    }}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        targetName={targetName}
        targetId={targetId}
        targetType="Mentor"
        isProvider={false}
      />
    </div>
  );
}
