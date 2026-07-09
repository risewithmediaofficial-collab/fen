import { Link } from 'react-router-dom';
import { Share2, Link2, Globe, PlayCircle, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Training Sessions', href: '/training' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'Industry Marketplace', href: '/industries' },
    { label: 'Events & Workshops', href: '/events' },
  ],
  Community: [
    { label: 'Networking', href: '/networking' },
    { label: 'Success Stories', href: '#' },
    { label: 'Government Schemes', href: '/schemes' },
    { label: 'Jobs & Internships', href: '/jobs' },
  ],
  'For Institutions': [
    { label: 'For Colleges', href: '/register' },
    { label: 'For Industries', href: '/register' },
    { label: 'For Government', href: '/register' },
    { label: 'Partner With FEN', href: '#' },
  ],
};

const socials = [
  { icon: Share2, href: '#', label: 'Twitter/X' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: PlayCircle, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#0A0A0A] border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">

      {/* Main Footer Grid */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-7">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-[#111111] dark:bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-black text-base text-white dark:text-[#111111]">F</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-lg text-[#111111] dark:text-white block">FEN</span>
                <span className="text-[8px] text-[#9E9E9E] font-medium uppercase tracking-[0.12em] block mt-0.5">Future Entrepreneur</span>
              </div>
            </Link>

            <p className="text-sm text-[#555555] dark:text-[#9E9E9E] leading-[1.8] max-w-xs">
              Connecting students, mentors, industries, and government in Krishnagiri District to build a thriving entrepreneurship ecosystem.
            </p>

            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-200 group/link"
              >
                <MapPin size={15} className="shrink-0 mt-0.5 text-[#CFCFCF] dark:text-[#555555] group-hover/link:text-[#555555] dark:group-hover/link:text-[#CFCFCF] transition-colors" />
                <span>District Industries Centre, Krishnagiri, Tamil Nadu</span>
              </a>
              <a
                href="mailto:hello@fen.in"
                className="flex items-center gap-3 text-sm text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-200"
              >
                <Mail size={15} className="text-[#CFCFCF] dark:text-[#555555]" />
                hello@fen.in
              </a>
              <a
                href="tel:+914344000000"
                className="flex items-center gap-3 text-sm text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-200"
              >
                <Phone size={15} className="text-[#CFCFCF] dark:text-[#555555]" />
                +91 4344 000 000
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white hover:border-black/[0.15] dark:hover:border-white/[0.15] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-200 hover:scale-110"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-5">
              <h4 className="font-display font-semibold text-[11px] text-[#111111] dark:text-white uppercase tracking-[0.14em]">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group/link flex items-center gap-1 text-sm text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover/link:opacity-100 -translate-y-0.5 translate-x-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-1 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supported By */}
        <div className="mt-16 pt-10 border-t border-black/[0.06] dark:border-white/[0.06]">
          <p className="text-[10px] text-[#CFCFCF] dark:text-[#555555] font-semibold uppercase tracking-[0.14em] mb-5">
            Supported By
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {['DIC Krishnagiri', 'StartupTN', 'TNSDC', 'MSME Ministry', 'Naan Mudhalvan', 'Tamil Nadu Guidance Bureau'].map((name) => (
              <span
                key={name}
                className="text-sm text-[#9E9E9E] dark:text-[#555555] hover:text-[#555555] dark:hover:text-[#9E9E9E] transition-colors duration-200 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06] py-5">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#CFCFCF] dark:text-[#555555]">
            © 2026 FEN — Future Entrepreneur Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#CFCFCF] dark:text-[#555555] hover:text-[#555555] dark:hover:text-[#9E9E9E] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
