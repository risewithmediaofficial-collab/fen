import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

// Google Form Embed URL for Bookings/Connections (from "Send Form" -> "Embed HTML" -> copy the src URL)
// You can replace this with your actual Google Form embed link!
const GOOGLE_FORM_BOOKINGS_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdMBLbFZ1I59oGmPm4A9kkSWeIxLop0zqbeyAv39apgGX8nrA/viewform?embedded=true";

// Google Form pre-fill entry IDs (Find these from your Google Form pre-filled link generator)
// By configuring these, the form will automatically fill the Host details when it loads!
const GOOGLE_FORM_PREFILL_ENTRY_IDS = {
  targetName: "", // Replace with your Form's Host Name/Target Name input field ID (e.g., "entry.3333333333")
  targetType: ""  // Replace with your Form's Category input field ID (e.g., "entry.4444444444")
};

export default function BookingModal({ isOpen, onClose, targetName, targetType }) {
  if (!isOpen) return null;

  // Append prefill query parameters dynamically
  let embedUrl = GOOGLE_FORM_BOOKINGS_EMBED_URL;
  const prefillParams = [];

  if (GOOGLE_FORM_PREFILL_ENTRY_IDS.targetName && targetName) {
    prefillParams.push(`${GOOGLE_FORM_PREFILL_ENTRY_IDS.targetName}=${encodeURIComponent(targetName)}`);
  }
  if (GOOGLE_FORM_PREFILL_ENTRY_IDS.targetType && targetType) {
    prefillParams.push(`${GOOGLE_FORM_PREFILL_ENTRY_IDS.targetType}=${encodeURIComponent(targetType)}`);
  }

  if (prefillParams.length > 0) {
    const separator = embedUrl.includes('?') ? '&' : '?';
    embedUrl += `${separator}${prefillParams.join('&')}`;
  }

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
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-2xl shadow-soft dark:shadow-soft-dark overflow-hidden flex flex-col h-[80vh] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/10 shrink-0">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-violet-500 dark:text-violet-400">
                Book Connection ({targetType})
              </span>
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white">
                Connecting with {targetName}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={embedUrl.replace('?embedded=true', '').replace('&embedded=true', '')}
                target="_blank"
                rel="noreferrer"
                title="Open Form in New Tab"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-650 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-650 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Embedded Google Form Iframe */}
          <div className="flex-1 w-full bg-[#F7F7F7] dark:bg-dark-900 relative min-h-0">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form Session Booking"
              className="absolute inset-0 w-full h-full"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
