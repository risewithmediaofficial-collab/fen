import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft, GraduationCap, Users } from 'lucide-react';

const GOOGLE_FORM_STUDENT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHBMYCIy97OHey3jhHVrSdi_pRFAbTGCtDwGq5t3ZZP9ZdHA/viewform?embedded=true";
const GOOGLE_FORM_MENTOR_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf6LZGF0uxbZHqH3l7ha8wJvNorV9o2-C1Syn4otEWnEYyFuQ/viewform?embedded=true";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState(null); // 'student' or 'mentor'
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    localStorage.setItem('fen_has_joined', 'true');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] px-4 pt-28 pb-16 transition-colors duration-300 flex flex-col items-center">
      <div className="container-max max-w-3xl w-full relative z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center shadow-glow-sm">
              <Zap size={16} className="text-white dark:text-gray-950" />
            </div>
            <span className="font-display font-bold text-lg gradient-text">FEN</span>
          </Link>
          <h1 className="font-display font-black text-3xl text-gray-900 dark:text-white leading-tight">
            Join the Network
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {selectedRole === null 
              ? "Select your profile type to register on FEN" 
              : `Fill out the Google Form below to register as a ${selectedRole === 'student' ? 'Student / Learner' : 'Mentor / Provider'}`
            }
          </p>
        </div>

        {selectedRole === null ? (
          /* Role Selection View */
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            {/* Student Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              onClick={() => handleSelectRole('student')}
              className="glass-card-light cursor-pointer p-6 flex flex-col items-center text-center space-y-4 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Join as Student</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  Sign up as a student or seeker to get access to career mentoring, Sunday training sessions, and events.
                </p>
              </div>
              <span className="text-xs font-semibold text-violet-500 pt-2 block">Register as Learner →</span>
            </motion.div>

            {/* Mentor Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              onClick={() => handleSelectRole('mentor')}
              className="glass-card-light cursor-pointer p-6 flex flex-col items-center text-center space-y-4 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Users size={28} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Join as Mentor</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  Register as a mentor, provider, industry partner, or investor to share guidance and list programs.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-500 pt-2 block">Register as Provider →</span>
            </motion.div>
          </div>
        ) : (
          /* Form Embed View */
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedRole(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={14} /> Back to role selection
              </button>
            </div>

            <div className="bg-white dark:bg-[#111111]/30 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-soft dark:shadow-soft-dark h-[700px] w-full relative">
              <iframe
                src={selectedRole === 'student' ? GOOGLE_FORM_STUDENT_URL : GOOGLE_FORM_MENTOR_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Google Form Registration"
                className="absolute inset-0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
