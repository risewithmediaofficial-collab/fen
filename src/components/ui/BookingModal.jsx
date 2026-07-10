import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BookingModal({ isOpen, onClose, targetName, targetType }) {
  const navigate = useNavigate();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasJoined = localStorage.getItem('fen_has_joined') === 'true';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-md bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-2xl shadow-soft dark:shadow-soft-dark overflow-hidden p-6 z-10 text-center space-y-5"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-655 transition-colors"
          >
            <X size={16} />
          </button>

          {hasJoined ? (
            /* Registered Success State */
            <>
              {/* Success Checkmark Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto"
              >
                <CheckCircle2 size={36} />
              </motion.div>

              {/* Alert Message Details */}
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-gray-900 dark:text-white leading-tight">
                  Activity Recorded!
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                  Your request to connect with <strong className="text-gray-900 dark:text-white font-semibold">{targetName}</strong> ({targetType}) has been successfully logged.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 text-[11px] text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                Our platform administrators have recorded this interaction. FEN will contact you shortly to coordinate.
              </div>

              {/* Action button */}
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="btn-primary w-full justify-center text-xs py-2.5 font-bold rounded-xl"
                >
                  Got it, thanks!
                </button>
              </div>
            </>
          ) : (
            /* Unregistered Prompt State */
            <>
              {/* Warning/Join Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center mx-auto"
              >
                <Zap size={30} className="text-violet-500" />
              </motion.div>

              {/* Request Message */}
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-gray-900 dark:text-white leading-tight">
                  Join FEN First!
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                  You must register or join the FEN network before you can book mentorship sessions, enroll in courses, or send inquiries.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 text-[11px] text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                Registration is free and takes less than a minute. Choose your profile type (Student or Mentor) to continue.
              </div>

              {/* Action button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    navigate('/register');
                  }}
                  className="btn-primary w-full justify-center text-xs py-2.5 font-bold rounded-xl flex items-center gap-1.5"
                >
                  Join FEN Now
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
