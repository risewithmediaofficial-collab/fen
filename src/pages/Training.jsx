import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, QrCode, Award, BookOpen } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { trainings, events } from '../data/mockData';
import BookingModal from '../components/ui/BookingModal';

export default function TrainingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetName, setTargetName] = useState('');
  const [targetId, setTargetId] = useState('');
  const [targetType, setTargetType] = useState('Training');

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <span className="text-[#555555] dark:text-[#CFCFCF]">Training Module</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
                Sunday Training Sessions
              </h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-6 max-w-lg">
              Every Sunday — free, expert-led training sessions in Krishnagiri. Attend, learn, earn certificates.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#555555] dark:text-[#CFCFCF] font-medium">
              <span className="flex items-center gap-1.5"><Clock size={14} /> Sunday, 10 AM – 1 PM</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> DIC Krishnagiri + Online</span>
              <span className="flex items-center gap-1.5"><Award size={14} /> Free Certificates</span>
              <span className="flex items-center gap-1.5"><QrCode size={14} /> QR Check-in</span>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Features */}
        <FadeInWhenVisible className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Free Training', desc: '100% free weekly sessions' },
            { label: 'QR Check-in', desc: 'Instant digital attendance' },
            { label: 'Certificates', desc: 'Auto-generated PDFs with QR' },
            { label: 'Every Sunday', desc: 'Consistent, reliable schedule' },
          ].map(({ label, desc }, i) => (
            <div key={label} className="glass-card-light p-5 text-center">
              <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-800 flex items-center justify-center mx-auto mb-3 text-gray-500 font-bold text-sm">
                0{i + 1}
              </div>
              <div className="font-display font-bold text-sm text-gray-900 dark:text-white mb-1">{label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{desc}</div>
            </div>
          ))}
        </FadeInWhenVisible>

        {/* Ongoing Courses */}
        <FadeInWhenVisible className="mb-6">
          <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">Ongoing Programs</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Enroll and attend every Sunday</p>
        </FadeInWhenVisible>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-12" staggerDelay={0.08}>
          {trainings.map((t) => (
            <motion.div key={t.id} variants={fadeInUp} className="glass-card-light hover:shadow-sm transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 text-xs font-bold bg-white dark:bg-dark-800 shrink-0">
                    0{t.id}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {t.free && <span className="badge-green text-[10px]">Free</span>}
                    <span className="badge bg-gray-100 dark:bg-white/10 text-gray-500 border border-gray-200 dark:border-white/10 text-[10px]">
                      {t.level}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">{t.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">by {t.instructor}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {t.tags.map((tag) => (
                    <span key={tag} className="badge-primary text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 font-semibold">
                  <span>{t.duration} · {t.sessions} sessions</span>
                  <span>·</span>
                  <span>Next: {new Date(t.nextSession).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                </div>

                {/* Enrollment progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>{t.enrolled} enrolled</span>
                    <span>{t.maxSeats - t.enrolled} seats left</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 dark:bg-white rounded-full"
                      style={{ width: `${(t.enrolled / t.maxSeats) * 100}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setTargetName(t.title);
                    setTargetId(t.id);
                    setTargetType('Training');
                    setBookingOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold btn-primary justify-center"
                >
                  Enroll Now — Free
                </button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Upcoming Events */}
        <FadeInWhenVisible className="mb-6">
          <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">Upcoming Sessions & Events</h2>
        </FadeInWhenVisible>

        <StaggerContainer className="space-y-4" staggerDelay={0.07}>
          {events.slice(0, 3).map((event) => (
            <motion.div key={event.id} variants={fadeInUp} className="glass-card-light p-5 flex flex-col sm:flex-row items-start gap-5">
              <div className="shrink-0 w-16 h-16 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-800 flex flex-col items-center justify-center text-gray-900 dark:text-white shadow-sm">
                <div className="font-display font-bold text-2xl leading-none">{new Date(event.date).getDate()}</div>
                <div className="text-[10px] font-bold mt-1 uppercase tracking-tight">{new Date(event.date).toLocaleString('en-IN', { month: 'short' })}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-0.5">{event.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Speaker: <span className="font-semibold text-gray-700 dark:text-gray-300">{event.speaker}</span> · {event.topic}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>{event.time}</span>
                  <span>·</span>
                  <span>{event.venue}</span>
                  <span>·</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{event.seats - event.registered} seats left</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setTargetName(event.title);
                  setTargetId(event.id);
                  setTargetType('Event');
                  setBookingOpen(true);
                }}
                className="shrink-0 btn-primary py-2.5 px-5 text-sm self-start"
              >
                Register
              </button>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        targetName={targetName}
        targetId={targetId}
        targetType={targetType}
        isProvider={false}
      />
    </div>
  );
}
