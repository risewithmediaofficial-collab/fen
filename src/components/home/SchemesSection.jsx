// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ExternalLink, ArrowRight } from 'lucide-react';
// import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
// import { govtSchemes } from '../../data/mockData';

// export default function SchemesSection() {
//   return (
//     <section className="section-padding bg-gray-50 dark:bg-dark-800">
//       <div className="container-max">
//         <FadeInWhenVisible className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-semibold mb-3 shadow-sm">
//               🏛️ Government Schemes
//             </div>
//             <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
//               Funding & Schemes
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400 mt-2">
//               Access government schemes for your business or startup
//             </p>
//           </div>
//           <Link to="/schemes" className="btn-secondary shrink-0">
//             All Schemes <ArrowRight size={16} />
//           </Link>
//         </FadeInWhenVisible>

//         <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 [column-fill:_balance] w-full" staggerDelay={0.07}>
//           {govtSchemes.map((scheme) => (
//             <motion.div
//               key={scheme.id}
//               variants={fadeInUp}
//               className="break-inside-avoid inline-block w-full feature-card mb-4"
//             >
//               {/* Color bar */}
//               <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-lg mb-4 shadow-sm">
//                 {scheme.category === 'Loan' ? '💰' :
//                  scheme.category === 'Skill Training' ? '📚' :
//                  scheme.category === 'Startup Funding' ? '🚀' :
//                  scheme.category === 'Registration' ? '📋' : '🏛️'}
//               </div>

//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white leading-tight">
//                   {scheme.title}
//                 </h3>
//               </div>

//               <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
//                 {scheme.description}
//               </p>

//               <div className="flex items-center gap-3 mb-3">
//                 <div className="flex-1 p-2 rounded-lg bg-gray-50 dark:bg-dark-900 border border-gray-150 dark:border-white/5 text-center">
//                   <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5">Max Amount</div>
//                   <div className="text-xs font-bold text-gray-900 dark:text-white">{scheme.maxAmount}</div>
//                 </div>
//                 <div className="flex-1 p-2 rounded-lg bg-gray-50 dark:bg-dark-900 border border-gray-150 dark:border-white/5 text-center">
//                   <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5">Subsidy</div>
//                   <div className="text-xs font-bold text-gray-900 dark:text-white">{scheme.subsidy}</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-1 mb-4">
//                 {scheme.tags.map((tag) => (
//                   <span key={tag} className="badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10 text-[10px]">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex items-center justify-between pt-3 border-t border-gray-150 dark:border-white/5">
//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   by <span className="font-medium text-gray-700 dark:text-gray-300">{scheme.department}</span>
//                 </span>
//                 <a
//                   href={scheme.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs font-semibold text-gray-950 dark:text-white hover:underline flex items-center gap-1"
//                 >
//                   Learn More <ExternalLink size={10} />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// }
