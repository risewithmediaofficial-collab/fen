import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Award } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { events } from '../data/mockData';
import BookingModal from '../components/ui/BookingModal';

const allEvents = [
  ...events,
  {
    id: 5,
    title: "Hackathon: AgriTech Krishnagiri",
    date: "2026-08-10",
    time: "9:00 AM – 9:00 PM",
    mode: "Offline",
    topic: "Build solutions for agriculture problems",
    speaker: "Technical Jury Panel",
    venue: "GCE Krishnagiri",
    seats: 100,
    registered: 45,
    type: "Hackathon",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 6,
    title: "Startup Demo Day - Season 3",
    date: "2026-08-24",
    time: "3:00 PM – 7:00 PM",
    mode: "Hybrid",
    topic: "Present your startup to investors and public",
    speaker: "Investor Panel + StartupTN",
    venue: "District Collectorate, Krishnagiri",
    seats: 60,
    registered: 28,
    type: "Demo Day",
    color: "from-rose-500 to-pink-600"
  },
];

const types = ['All', 'Training', 'Workshop', 'Pitching', 'Hackathon', 'Industrial Visit', 'Demo Day'];

export default function EventsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetName, setTargetName] = useState('');
  const [targetEventId, setTargetEventId] = useState(null);
  const [registeredEventIds, setRegisteredEventIds] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('fen_registered_events') || '[]');
    setRegisteredEventIds(ids);
  }, []);

  const handleCloseModal = () => {
    setBookingOpen(false);
    if (targetEventId && !registeredEventIds.includes(targetEventId)) {
      const updated = [...registeredEventIds, targetEventId];
      setRegisteredEventIds(updated);
      localStorage.setItem('fen_registered_events', JSON.stringify(updated));
    }
  };
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] pt-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#F7F7F7] dark:bg-[#111111] border-b border-black/5 dark:border-white/5 text-[#111111] dark:text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-black/5 dark:bg-[#0A0A0A] dark:border-white/5 text-xs font-semibold mb-4">
              <Calendar size={13} className="text-[#555555] dark:text-[#CFCFCF]" />
              <span className="text-[#555555] dark:text-[#CFCFCF]">Events &amp; Programs</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-[#111111] dark:text-white">
              Events, Workshops &amp; Hackathons
            </h1>
            <p className="text-[#555555] dark:text-[#CFCFCF] text-base mb-6 max-w-lg">
              Stay updated with FEN's weekly training sessions, pitching events, industrial visits, and startup showcases.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#9E9E9E] font-medium items-center">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {allEvents.length} upcoming events</span>
              <span className="flex items-center gap-1.5"><Award size={14} /> Certificates for all events</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> Online + Offline formats</span>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Type Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {types.map((t) => (
            <button key={t} className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
              t === 'All'
                ? 'bg-[#111111] dark:bg-white text-white dark:text-black border-transparent'
                : 'bg-[#FFFFFF] dark:bg-[#111111] text-[#555555] dark:text-[#CFCFCF] border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20'
            }`}>
              {t}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event, index) => {
            const isLarge = index % 2 === 0;
            const cardPadding = isLarge ? "p-8" : "p-6";
            const titleSize = isLarge ? "text-lg sm:text-xl" : "text-base";
            const descSize = isLarge ? "text-sm" : "text-xs";
            const iconSize = isLarge ? 14 : 11;
            const gapClass = isLarge ? "space-y-4" : "space-y-3";

            return (
              <motion.div
                key={event.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -45 : 45,
                  y: index % 3 === 0 ? 30 : index % 3 === 1 ? 15 : 5,
                  scale: isLarge ? 0.96 : 1.02,
                  rotate: index % 2 === 0 ? -1.5 : 1.5
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 55,
                  damping: 14,
                  mass: 0.9,
                  delay: (index % 3) * 0.04
                }}
                className="glass-card-light overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className={`${cardPadding} flex-1 flex flex-col border-b border-black/5 dark:border-white/5 ${gapClass}`}>
                  {/* Date Badge + Type */}
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl border border-black/5 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#111111] flex flex-col items-center justify-center text-[#111111] dark:text-white shrink-0`}>
                      <div className="font-display font-bold text-xl leading-none">{new Date(event.date).getDate()}</div>
                      <div className="text-[9px] font-medium text-[#9E9E9E]">{new Date(event.date).toLocaleString('en-IN', { month: 'short' })}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="badge-primary">
                        {event.type}
                      </span>
                      <span className={`badge text-[10px] ${event.mode === 'Online' ? 'badge-primary' : event.mode === 'Hybrid' ? 'badge-amber' : 'badge-green'}`}>
                        {event.mode}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-display font-bold ${titleSize} text-[#111111] dark:text-white mb-2 leading-tight`}>
                      {event.title}
                    </h3>
                    <p className={`${descSize} text-[#555555] dark:text-[#CFCFCF] mb-1.5 leading-relaxed`}>
                      <strong>Topic:</strong> {event.topic}
                    </p>
                    <p className={`${descSize} text-[#555555] dark:text-[#CFCFCF]`}>
                      Speaker: <span className="font-medium text-[#111111] dark:text-white">{event.speaker}</span>
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#9E9E9E]">
                    <div className="flex items-center gap-2"><Clock size={iconSize} /> {event.time}</div>
                    <div className="flex items-center gap-2"><MapPin size={iconSize} /> {event.venue}</div>
                  </div>

                  {/* Seat progress */}
                  <div className="mt-auto pt-2">
                    <div className="flex justify-between text-xs text-[#9E9E9E] mb-1.5">
                      <span>{event.registered} registered</span>
                      <span className={event.registered >= event.seats ? 'text-red-500 font-semibold' : 'text-green-500 font-semibold'}>
                        {event.seats - event.registered > 0 ? `${event.seats - event.registered} seats left` : 'FULL'}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-black dark:bg-white rounded-full transition-all"
                        style={{ width: `${Math.min((event.registered / event.seats) * 100, 100)}%` }} />
                    </div>
                  </div>

                  {registeredEventIds.includes(event.id) ? (
                    <button
                      disabled
                      className="w-full py-3 rounded-xl text-sm font-bold bg-green-500/10 text-emerald-500 border border-green-500/20 cursor-not-allowed"
                    >
                      Registered
                    </button>
                  ) : (
                    <button
                      disabled={event.registered >= event.seats}
                      onClick={() => {
                        setTargetName(event.title);
                        setTargetEventId(event.id);
                        setBookingOpen(true);
                      }}
                      className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        event.registered >= event.seats
                          ? 'bg-black/5 dark:bg-white/5 text-[#9E9E9E] cursor-not-allowed'
                          : 'bg-[#111111] dark:bg-white text-white dark:text-black hover:opacity-90'
                      }`}
                    >
                      {event.registered >= event.seats ? 'Event Full' : 'Register Now →'}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseModal}
        targetName={targetName}
        targetId={targetEventId}
        targetType="Event"
      />
    </div>
  );
}
