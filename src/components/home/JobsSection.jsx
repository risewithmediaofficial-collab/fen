// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Clock, ArrowRight, Zap, Filter } from 'lucide-react';
// import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
// import { jobs } from '../../data/mockData';

// const typeColors = {
//   'Full Time': 'badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5',
//   'Internship': 'badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10',
//   'Part Time': 'badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5',
//   'Campus Hiring': 'badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10',
// };

// export default function JobsSection() {
//   return (
//     <section className="section-padding bg-gray-50 dark:bg-dark-800">
//       <div className="container-max">
//         <FadeInWhenVisible className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-semibold mb-3 shadow-sm">
//               💼 Latest Opportunities
//             </div>
//             <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
//               Jobs & Internships
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400 mt-2">
//               Local opportunities from Krishnagiri industries
//             </p>
//           </div>
//           <Link to="/jobs" className="btn-secondary shrink-0">
//             View All Jobs <ArrowRight size={16} />
//           </Link>
//         </FadeInWhenVisible>

//         <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 [column-fill:_balance] w-full" staggerDelay={0.07}>
//           {jobs.map((job) => (
//             <motion.div
//               key={job.id}
//               variants={fadeInUp}
//               className="break-inside-avoid inline-block w-full feature-card mb-4"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between gap-3 mb-3">
//                 <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
//                   <Briefcase size={18} className="text-gray-900 dark:text-white" />
//                 </div>
//                 <div className="flex flex-col items-end gap-1">
//                   <span className={typeColors[job.type] || 'badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10'}>{job.type}</span>
//                   {job.urgent && (
//                     <span className="badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5 text-[10px] flex items-center gap-1">
//                       <Zap size={8} /> Urgent
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-0.5">
//                 {job.title}
//               </h3>
//               <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold mb-3">{job.company}</p>

//               <div className="space-y-1.5 mb-3">
//                 <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-450">
//                   <MapPin size={11} className="text-gray-400 shrink-0" />
//                   {job.location}
//                 </div>
//                 <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-450">
//                   <Briefcase size={11} className="text-gray-400 shrink-0" />
//                   {job.qualification} · {job.experience}
//                 </div>
//                 <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-450">
//                   <Clock size={11} className="text-gray-400 shrink-0" />
//                   Posted {job.posted} · Deadline {new Date(job.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-1 mb-4">
//                 {job.tags.map((tag) => (
//                   <span key={tag} className="badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10 text-[10px]">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex items-center justify-between pt-3 border-t border-gray-150 dark:border-white/5">
//                 <span className="text-sm font-bold text-gray-900 dark:text-white">{job.salary}</span>
//                 <Link to="/jobs" className="text-xs font-semibold text-gray-900 dark:text-white hover:underline flex items-center gap-1">
//                   Apply Now <ArrowRight size={12} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }
