import { motion } from 'framer-motion';
import { ExternalLink, Search, ArrowRight } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { govtSchemes } from '../data/mockData';

const categories = ['All', 'Loan', 'Skill Training', 'Startup Funding', 'Registration', 'Government Support'];
const categoryIcons = {
  'Loan': '💰',
  'Skill Training': '📚',
  'Startup Funding': '🚀',
  'Registration': '📋',
  'Government Support': '🏛️',
};

const depts = [
  { name: 'DIC Krishnagiri', desc: 'District Industries Centre — local industrial support', icon: '🏛️' },
  { name: 'StartupTN', desc: 'Tamil Nadu\'s startup ecosystem support programme', icon: '🚀' },
  { name: 'TNSDC', desc: 'Tamil Nadu Skill Development Corporation', icon: '📚' },
  { name: 'MSME Ministry', desc: 'Government of India MSME schemes and programs', icon: '🏭' },
  { name: 'Naan Mudhalvan', desc: 'Free skill training for TN students', icon: '🎓' },
  { name: 'SIDBI', desc: 'Small Industries Development Bank of India', icon: '🏦' },
];

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <span className="text-[#555555] dark:text-[#CFCFCF]">Government Schemes</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-gray-900 dark:text-white">
              Funding, Loans & Subsidies
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-6 max-w-xl">
              All government schemes for entrepreneurs, MSMEs, startups, and students — in one place.
              Eligibility, documents, and application guide.
            </p>
            <div className="relative max-w-xl">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input placeholder="Search schemes, departments, loan types..." className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-gray-200 dark:bg-dark-700 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950/10 text-sm shadow-sm" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-gray-900 text-white border-transparent dark:bg-white dark:text-gray-900'
                  : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scheme Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14" staggerDelay={0.07}>
          {govtSchemes.map((scheme) => (
            <motion.div key={scheme.id} variants={fadeInUp} className="glass-card-light hover:shadow-sm transition-all duration-300 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 bg-white dark:bg-dark-800 shrink-0 shadow-sm">
                    0{scheme.id}
                  </div>
                  <div>
                    <span className="badge-primary text-[10px] mb-1">
                      {scheme.category}
                    </span>
                    <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white leading-tight">
                      {scheme.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {scheme.description}
                </p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Max Amount', value: scheme.maxAmount },
                    { label: 'Subsidy / Benefit', value: scheme.subsidy },
                    { label: 'Eligibility', value: scheme.eligibility },
                    { label: 'Department', value: scheme.department },
                  ].map(({ label, value }) => (
                    <div key={label} className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-800">
                      <div className="text-[9px] text-gray-400 dark:text-gray-500 mb-0.5 uppercase tracking-wider font-semibold">{label}</div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {scheme.tags.map((t) => (
                    <span key={t} className="badge-primary text-[10px]">{t}</span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                    View Details
                  </button>
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold btn-primary justify-center text-white"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Departments */}
        <FadeInWhenVisible className="mb-8">
          <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-1">Supported Government Departments</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Direct connections to your local government support</p>
        </FadeInWhenVisible>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
          {depts.map((d, i) => (
            <motion.div key={d.name} variants={fadeInUp} className="glass-card-light p-5 flex items-start gap-4 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 text-xs font-bold text-gray-500 bg-white dark:bg-dark-800">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">{d.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
