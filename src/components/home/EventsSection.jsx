import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../ui/AnimationUtils';
import { events } from '../../data/mockData';

export default function EventsSection() {
  return (
    <section className="section-padding bg-white text-[#111111] dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      <div className="container-max relative z-10">
        
        {/* Header Section */}
        <FadeInWhenVisible className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-20">
          <div>
            <div className="pill-label mb-4">
              <span>📅 Upcoming Events</span>
            </div>
            <h2 className="font-display font-black text-4xl text-[#111111] dark:text-white tracking-tight">
              Sunday sessions &amp; meetups
            </h2>
            <p className="text-[#555555] dark:text-[#CFCFCF] mt-3 text-base font-normal max-w-md">
              Every Sunday — join free hands-on training, MSME workshops, and peer-to-peer networking in Krishnagiri.
            </p>
          </div>
          <Link to="/events" className="btn-secondary group shrink-0">
            All Events 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </FadeInWhenVisible>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical timeline connector line */}
          <div className="absolute left-6 sm:left-12 top-2 bottom-2 w-[1.5px] bg-black/5 dark:bg-white/5 pointer-events-none" />

          <StaggerContainer className="space-y-12" staggerDelay={0.08}>
            {events.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
}

function EventRow({ event }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: '-10% 0px -10% 0px' });
  
  const parsedDate = new Date(event.date);
  const day = parsedDate.getDate();
  const month = parsedDate.toLocaleString('en-IN', { month: 'short' });

  // Calculate percentage for progress indicator
  const fillPercentage = (event.registered / event.seats) * 100;

  return (
    <motion.div
      ref={rowRef}
      variants={fadeInUp}
      className="relative flex gap-6 sm:gap-12 group pl-2 items-start"
    >
      
      {/* Dynamic Connector Node */}
      <div className="absolute left-6 sm:left-12 top-8 -translate-x-[4.5px] w-2.5 h-2.5 rounded-full bg-white dark:bg-[#0A0A0A] border-2 border-black/10 dark:border-white/10 group-hover:border-violet-500 group-hover:scale-125 transition-all duration-300 z-10" />

      {/* Date Block */}
      <div className="shrink-0 flex flex-col items-center justify-center w-12 sm:w-24 text-center select-none pt-2">
        <span className="font-display font-black text-3xl sm:text-5xl leading-none text-[#111111] dark:text-white transition-colors group-hover:text-violet-500 dark:group-hover:text-violet-400">
          {day}
        </span>
        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#9E9E9E] mt-1 sm:mt-2">
          {month}
        </span>
      </div>

      {/* Content details side */}
      <div className="flex-1 pb-10 border-b border-black/5 dark:border-white/5 pr-4 space-y-4">
        
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge-primary">{event.type}</span>
          <span className="badge-green">{event.mode}</span>
          <span className="text-[10px] font-mono text-[#9E9E9E]">
            {event.seats - event.registered} seats left
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white leading-tight">
          {event.title}
        </h3>

        {/* Speaker and details */}
        <p className="text-sm text-[#555555] dark:text-[#CFCFCF] font-normal leading-relaxed">
          Topic: <span className="font-semibold text-[#111111] dark:text-white">{event.topic}</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          led by <span className="font-semibold text-[#111111] dark:text-white">{event.speaker}</span>
        </p>

        {/* Info pills */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#9E9E9E]">
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            {event.venue}
          </span>
        </div>

        {/* Clean dynamic progress bar */}
        <div className="max-w-md space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono font-bold text-[#9E9E9E]">
            <span>Capacity</span>
            <span>{event.registered}/{event.seats} registered</span>
          </div>
          <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#111111] dark:bg-white rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: fillPercentage / 100 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>

      </div>

      {/* Button link */}
      <div className="shrink-0 self-center hidden sm:block">
        <Link
          to="/events"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/5 dark:border-white/10 text-[#111111] dark:text-white hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-400 dark:hover:text-violet-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-soft dark:shadow-soft-dark"
        >
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-250" />
        </Link>
      </div>

    </motion.div>
  );
}
