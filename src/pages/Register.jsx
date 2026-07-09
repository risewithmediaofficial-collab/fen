import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, ArrowLeft, Check, Globe,
  GraduationCap, Users, Building2, Store, Rocket, School, Building, ShoppingCart, Mail 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const roles = [
  { value: 'student', label: 'Student', icon: GraduationCap, desc: 'Learn, get mentored, find jobs' },
  { value: 'mentor', label: 'Mentor', icon: Users, desc: 'Guide students and entrepreneurs' },
  { value: 'industry', label: 'Industry / Company', icon: Building2, desc: 'Post jobs, find talent, showcase' },
  { value: 'msme', label: 'MSME / Small Business', icon: Store, desc: 'Sell products, get govt support' },
  { value: 'startup', label: 'Startup', icon: Rocket, desc: 'Access funding and mentoring' },
  { value: 'college', label: 'College / Institution', icon: School, desc: 'Connect with industries' },
  { value: 'government', label: 'Government Dept.', icon: Building, desc: 'Share schemes and programs' },
  { value: 'client', label: 'Client / Buyer', icon: ShoppingCart, desc: 'Find products and services' },
];

// Published Google Sheet CSV URL (to verify user existence on registration check)
// Replace with your published Sheet CSV link (File -> Share -> Publish to Web -> CSV)
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2OjCzvkTcEITer9xs1xUQETtG-CJh82N2hLwDdzOUobaL4HV91OL_CYMStdyl5ibn7sWGTz0VWa13/pub?output=csv";

// Google Form Embed URL (from "Send Form" -> "Embed HTML" -> copy the src URL)
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdMBLbFZ1I59oGmPm4A9kkSWeIxLop0zqbeyAv39apgGX8nrA/viewform?embedded=true";

const parseCSV = (text) => {
  const lines = text.split('\n');
  if (lines.length === 0) return [];
  
  // Parse headers
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    const cells = [];
    let currentCell = '';
    let inQuotes = false;
    for (let char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        cells.push(currentCell.trim());
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim());
    
    const row = {};
    headers.forEach((header, index) => {
      row[header] = cells[index] ? cells[index].replace(/"/g, '') : '';
    });
    return row;
  });
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] px-4 pt-28 pb-16 transition-colors duration-300 flex flex-col items-center">
      <div className="container-max max-w-3xl w-full relative z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center shadow-glow-sm">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg gradient-text">FEN</span>
          </Link>
          <h1 className="font-display font-black text-3xl text-gray-900 dark:text-white leading-tight">
            Join the Network
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill out the Google Form below to register for FEN.
          </p>
        </div>

        {/* Embedded Form Iframe */}
        <div className="bg-white dark:bg-[#111111]/30 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-soft dark:shadow-soft-dark h-[700px] w-full relative">
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
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

        <p className="text-center text-xs text-gray-500 dark:text-gray-500 pt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-gray-900 dark:text-white font-semibold hover:text-primary-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
