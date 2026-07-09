import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Briefcase, Clock, ArrowRight, Zap, SlidersHorizontal, X } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { jobs } from '../data/mockData';

const tabs = ['All', 'Full Time', 'Internship', 'Part Time', 'Campus Hiring', 'Walk-in'];
const typeColors = {
  'Full Time': 'badge-green',
  'Internship': 'badge-primary',
  'Part Time': 'badge-amber',
  'Campus Hiring': 'badge bg-blue-500/20 text-blue-400 border border-blue-500/30',
  'Walk-in': 'badge bg-orange-500/20 text-orange-400 border border-orange-500/30',
};

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = jobs.filter((j) => {
    const matchTab = activeTab === 'All' || j.type === activeTab;
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      {/* Header */}
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 dark:bg-dark-700 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-semibold mb-4">
              Job Portal
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-gray-900 dark:text-white">
              Find Jobs & Internships
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-8 max-w-lg">
              Local opportunities from Krishnagiri industries, MSMEs, and startups
            </p>

            {/* Search */}
            <div className="flex gap-3 max-w-2xl">
              <div className="flex-1 relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search job title, company..."
                  className="w-full pl-4 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-all"
              >
                Filters
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
              <span><strong className="text-gray-900 dark:text-white">{jobs.length}</strong> jobs listed</span>
              <span><strong className="text-gray-900 dark:text-white">6</strong> companies hiring</span>
              <span><strong className="text-gray-900 dark:text-white">3</strong> campus drives upcoming</span>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary-500 text-white shadow-glow-sm'
                  : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-600 border border-gray-200 dark:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:col-span-1 space-y-5`}>
            <div className="glass-card-light p-5">
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white mb-4">Filters</h3>

              {[
                { label: 'Location', options: ['Krishnagiri', 'Hosur', 'Denkanikottai', 'Bargur', 'Remote'] },
                { label: 'Experience', options: ['Fresher', '0-1 years', '1-3 years', '3+ years'] },
                { label: 'Qualification', options: ['10th', '12th / HSC', 'ITI / Diploma', 'Any Degree', 'B.E / B.Tech', 'MBA / MCA'] },
              ].map((filter) => (
                <div key={filter.label} className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">{filter.label}</h4>
                  <div className="space-y-2">
                    {filter.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded w-3.5 h-3.5 border-gray-300 text-primary-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Salary Range</h4>
                <div className="flex gap-2">
                  <input type="text" placeholder="Min" className="input-field text-xs py-2 px-3" />
                  <input type="text" placeholder="Max" className="input-field text-xs py-2 px-3" />
                </div>
              </div>

              <button className="btn-primary w-full justify-center py-2.5 text-sm">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <strong className="text-gray-900 dark:text-white">{filtered.length}</strong> opportunities
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-gray-400 dark:text-gray-500 mb-4 shadow-sm">
                  <Search size={20} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white mb-2">No jobs found</h3>
                <p className="text-[#555555] dark:text-[#9E9E9E] text-sm">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <StaggerContainer className="space-y-4" staggerDelay={0.06}>
                {filtered.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={fadeInUp}
                    className="glass-card-light p-5 sm:p-6 hover:shadow-glow-sm transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 text-gray-500 text-xs font-bold bg-white dark:bg-dark-800">
                        {(job.id).toString().padStart(2, '0')}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">{job.title}</h3>
                          {job.urgent && (
                            <span className="badge-red text-[10px]">
                              Urgent
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-gray-900 dark:text-white font-semibold mb-3">{job.company}</p>

                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                          <span>{job.location}</span>
                          <span>·</span>
                          <span>{job.qualification}</span>
                          <span>·</span>
                          <span>{job.experience}</span>
                          <span>·</span>
                          <span>{job.posted}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag) => (
                            <span key={tag} className="badge-primary text-[10px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 shrink-0">
                        <span className={typeColors[job.type] || 'badge-primary'}>{job.type}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{job.salary}</span>
                        <button className="btn-primary py-2 px-4 text-sm">
                          Apply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
