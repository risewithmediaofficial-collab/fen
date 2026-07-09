import { motion } from 'framer-motion';

const row1 = [
  'DIC Krishnagiri',
  'StartupTN',
  'TNSDC',
  'MSME Ministry',
  'Brakes India Ltd',
  'Suguna Power Systems',
  'TVS Motor Company',
  'Hosur Tech Solutions',
  'Sakthi Handicrafts',
  'AgriTech Krishnagiri',
];

const row2 = [
  'Naan Mudhalvan',
  'Tamil Nadu Guidance Bureau',
  'KGI Textile Mills',
  'GreenLeaf Agro Industries',
  'IIT Madras incubator',
  'SIDBI',
  'Hosur Auto Components',
  'TNSDC Academy',
  'SIPCOT Hosur',
  'Startup India',
];

export default function CompaniesMarquee() {
  return (
    <section className="py-20 bg-white text-[#111111] dark:bg-[#0A0A0A] dark:text-white border-y border-black/[0.04] dark:border-white/5 transition-colors duration-300 relative overflow-hidden">
      
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#9E9E9E] font-bold">
          Trusted by Krishnagiri's Leading Organizations
        </p>
      </div>

      {/* Marquee Container with fade out masks on both sides */}
      <div className="relative w-full overflow-hidden mask-gradient-sides">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex w-full mb-6">
          <div className="marquee-track py-2">
            {[...row1, ...row1].map((name, index) => (
              <span
                key={index}
                className="mx-8 text-lg sm:text-xl font-display font-bold text-[#555555] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-300 cursor-default whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-full">
          <div className="marquee-track-reverse py-2">
            {[...row2, ...row2].map((name, index) => (
              <span
                key={index}
                className="mx-8 text-lg sm:text-xl font-display font-bold text-[#555555] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-300 cursor-default whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
