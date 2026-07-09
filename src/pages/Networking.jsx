import { motion } from 'framer-motion';
import { 
  MessageCircle, Users, Hash, Bell, TrendingUp, ArrowRight, Plus, Search,
  Laptop, Rocket, Store, Users as UsersIcon, Building, Sprout, HelpCircle, Calendar
} from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';

const groups = [
  { name: 'Web Developers KGI', members: 234, category: 'Skill', icon: '💻', color: 'from-violet-500 to-indigo-600', active: true },
  { name: 'Startup Founders Circle', members: 89, category: 'Startup', icon: '🚀', color: 'from-amber-500 to-orange-600', active: true },
  { name: 'MSME Krishnagiri', members: 312, category: 'Business', icon: '🏪', color: 'from-emerald-500 to-teal-600', active: false },
  { name: 'Mentors Network', members: 48, category: 'Mentors', icon: '🧑‍🏫', color: 'from-blue-500 to-cyan-600', active: true },
  { name: 'Government Schemes Updates', members: 567, category: 'Info', icon: '🏛️', color: 'from-red-500 to-rose-600', active: false },
  { name: 'Agri-Tech Innovators', members: 145, category: 'Startup', icon: '🌾', color: 'from-lime-500 to-green-600', active: true },
];

const groupIconMap = {
  '💻': Laptop,
  '🚀': Rocket,
  '🏪': Store,
  '🧑‍🏫': UsersIcon,
  '🏛️': Building,
  '🌾': Sprout
};

const discussions = [
  { id: 1, title: 'How to get PMEGP loan approved in Krishnagiri?', author: 'Murugan K.', time: '2h ago', replies: 12, views: 89, tags: ['Loan', 'PMEGP'] },
  { id: 2, title: 'Best way to learn web development for free — Naan Mudhalvan vs FEN training?', author: 'Preethi S.', time: '5h ago', replies: 24, views: 156, tags: ['Training', 'Web Dev'] },
  { id: 3, title: 'Looking for co-founder for agri-tech startup in Krishnagiri', author: 'Arun T.', time: '1d ago', replies: 8, views: 67, tags: ['Startup', 'AgriTech'] },
  { id: 4, title: 'Sharing my experience: Got placed at Hosur MNC through FEN mentorship', author: 'Manikandan R.', time: '2d ago', replies: 31, views: 234, tags: ['Placement', 'Mentorship'] },
];

const announcements = [
  { title: 'Sunday Training Session #24 — AI Tools for Business', time: '1h ago', type: 'Event', icon: '📅' },
  { title: 'New Government Scheme: CMEGP 2026 Applications Open', time: '3h ago', type: 'Scheme', icon: '🏛️' },
  { title: 'FEN Startup Pitch Day — Register before July 15', time: '1d ago', type: 'Opportunity', icon: '🚀' },
  { title: 'New Mentor Added: Dr. Senthil Kumar (IIT Madras)', time: '2d ago', type: 'Update', icon: '🧑‍🏫' },
];

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <UsersIcon size={13} className="text-[#555555] dark:text-[#CFCFCF]" />
              <span className="text-[#555555] dark:text-[#CFCFCF]">Community</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-[#111111] dark:text-white">
              FEN Community &amp; Networking
            </h1>
            <p className="text-[#555555] dark:text-[#CFCFCF] text-base mb-6 max-w-lg">
              Join discussions, skill groups, and startup communities. Connect with peers, mentors, and industry professionals.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#9E9E9E] font-medium items-center">
              <span className="flex items-center gap-1.5"><UsersIcon size={14} /> 1,240+ members</span>
              <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {discussions.length * 10}+ discussions</span>
              <span className="flex items-center gap-1.5"><Hash size={14} /> {groups.length} active groups</span>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Groups + Discussions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Groups */}
            <FadeInWhenVisible>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white">Skill &amp; Interest Groups</h2>
                <button className="btn-secondary text-xs py-2 px-3"><Plus size={13} /> Create Group</button>
              </div>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
                {groups.map((g) => (
                  <motion.div key={g.name} variants={fadeInUp} className="glass-card-light p-4 transition-all duration-300 flex items-center gap-4 border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-[#111111]/30">
                    <div className="w-12 h-12 rounded-xl border border-black/5 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#111111] flex items-center justify-center shrink-0 text-[#555555] dark:text-[#CFCFCF]">
                      {(() => {
                        const IconComponent = groupIconMap[g.icon] || HelpCircle;
                        return <IconComponent size={20} />;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-sm text-[#111111] dark:text-white truncate">{g.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#9E9E9E]">{g.members} members</span>
                        {g.active && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />}
                      </div>
                    </div>
                    <button className="shrink-0 text-xs font-semibold text-violet-500 dark:text-violet-400 hover:underline">Join →</button>
                  </motion.div>
                ))}
              </StaggerContainer>
            </FadeInWhenVisible>

            {/* Discussions */}
            <FadeInWhenVisible>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white">Recent Discussions</h2>
                <button className="btn-primary text-xs py-2 px-4"><Plus size={13} /> New Post</button>
              </div>
              <div className="space-y-4">
                {discussions.map((d) => (
                  <div key={d.id} className="glass-card-light p-5 transition-all duration-300 cursor-pointer group border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-[#111111]/30">
                    <h3 className="font-semibold text-sm text-[#111111] dark:text-white mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors leading-snug">
                      {d.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {d.tags.map((t) => (
                        <span key={t} className="badge-primary text-[10px]">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#9E9E9E]">
                      <span>by <strong className="text-[#555555] dark:text-[#CFCFCF]">{d.author}</strong></span>
                      <span>{d.time}</span>
                      <span className="flex items-center gap-1"><MessageCircle size={11} /> {d.replies} replies</span>
                      <span className="flex items-center gap-1"><TrendingUp size={11} /> {d.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right: Announcements + Stats */}
          <div className="space-y-6">
            {/* Announcements */}
            <FadeInWhenVisible className="glass-card-light p-5 border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-[#111111]/30">
              <div className="flex items-center gap-2 mb-4">
                <Bell size={16} className="text-[#111111] dark:text-white" />
                <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">Announcements</h3>
              </div>
              <div className="space-y-3">
                {announcements.map((a, i) => {
                  const iconMap = {
                    '📅': Calendar,
                    '🏛️': Building,
                    '🚀': Rocket,
                    '🧑‍🏫': UsersIcon
                  };
                  const Icon = iconMap[a.icon] || HelpCircle;
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F7F7] dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Icon size={16} className="text-[#555555] dark:text-[#CFCFCF] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-[#111111] dark:text-white leading-snug">{a.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-[#9E9E9E]">{a.time}</span>
                          <span className="badge bg-black/5 text-[#555555] dark:bg-white/5 dark:text-[#CFCFCF] border-0 text-[9px]">{a.type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInWhenVisible>

            {/* Community Stats */}
            <FadeInWhenVisible className="glass-card-light p-5 border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-[#111111]/30">
              <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white mb-4">Community Stats</h3>
              <div className="space-y-3">
                {[
                  { label: 'Members', value: '1,240', icon: UsersIcon, color: 'text-[#111111] dark:text-white' },
                  { label: 'Active Groups', value: '6', icon: Hash, color: 'text-[#111111] dark:text-white' },
                  { label: 'Discussions', value: '324', icon: MessageCircle, color: 'text-[#111111] dark:text-white' },
                  { label: 'Posts today', value: '18', icon: TrendingUp, color: 'text-[#111111] dark:text-white' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] dark:bg-white/10 flex items-center justify-center border border-black/5 dark:border-white/5">
                      <s.icon size={14} className={s.color} />
                    </div>
                    <span className="text-xs text-[#555555] dark:text-[#CFCFCF] flex-1">{s.label}</span>
                    <span className="font-bold text-sm text-[#111111] dark:text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>

            {/* Join CTA */}
            <FadeInWhenVisible className="glass-card-light p-5 text-center border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-[#111111]/30 space-y-4 flex flex-col items-center">
              <UsersIcon size={32} className="text-[#555555] dark:text-[#CFCFCF]" />
              <div>
                <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white mb-1">Join the Community</h3>
                <p className="text-xs text-[#9E9E9E] max-w-[200px]">Connect with 1,240+ entrepreneurs and professionals</p>
              </div>
              <button className="btn-primary w-full justify-center py-2.5 text-sm">
                Join FEN Community <ArrowRight size={14} />
              </button>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
}
