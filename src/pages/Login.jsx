import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Globe, GraduationCap, Users, Building2, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const roles = [
  { value: 'student', label: 'Student', icon: GraduationCap },
  { value: 'mentor', label: 'Mentor', icon: Users },
  { value: 'industry', label: 'Industry', icon: Building2 },
  { value: 'admin', label: 'Admin', icon: Settings },
];

// Published Google Sheet CSV URL
// Replace with: https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2OjCzvkTcEITer9xs1xUQETtG-CJh82N2hLwDdzOUobaL4HV91OL_CYMStdyl5ibn7sWGTz0VWa13/pub?output=csv";

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

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !pass) {
      setError('Please enter both your email address and password.');
      return;
    }

    if (GOOGLE_SHEET_CSV_URL) {
      setLoading(true);
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        const text = await response.text();
        const rows = parseCSV(text);

        // Standard Google Sheets headers generated from Form:
        // "Timestamp", "Role", "Full Name", "Email Address", "Mobile Number", "Password"
        const matchedUser = rows.find(row => {
          // Check matching email or phone
          const rowEmail = (row['Email Address'] || row['email'] || '').toLowerCase();
          const rowPhone = (row['Mobile Number'] || row['phone'] || '').toLowerCase();
          const rowPassword = row['Password'] || row['password'] || '';

          const emailOrPhoneMatches = rowEmail === email.toLowerCase() || rowPhone === email.toLowerCase();
          return emailOrPhoneMatches && rowPassword === pass;
        });

        if (matchedUser) {
          const userRole = (matchedUser['Role'] || matchedUser['role'] || selectedRole).toLowerCase();
          login(userRole);
          navigate('/dashboard');
        } else {
          setError('Invalid credentials. Password or email/mobile is incorrect.');
        }
      } catch (err) {
        console.error('Sheet verification failed, fallback to local sign in:', err);
        setError('Connection failed. Defaulting to local demo sign in...');
        setTimeout(() => {
          login(selectedRole);
          navigate('/dashboard');
        }, 1200);
      } finally {
        setLoading(false);
      }
    } else {
      // Local fallback if sheet is not configured
      login(selectedRole);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#0A0A0A] px-4 pt-16 transition-colors duration-300">
      {/* Background */}
      <div className="glow-orb w-[500px] h-[500px] bg-gray-900 dark:bg-white text-white dark:text-gray-950 top-[-100px] left-[-100px] opacity-10" />
      <div className="glow-orb w-[300px] h-[300px] bg-gray-900 dark:bg-white text-white dark:text-gray-950 bottom-[-50px] right-[-50px] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center shadow-glow-sm">
              <Zap size={20} className="text-white" />
            </div>
            <span className="font-display font-bold text-2xl gradient-text">FEN</span>
          </Link>
          <h1 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Sign in to your FEN account
          </p>
        </div>

        <div className="glass-card-light p-8">
          {/* Demo Role Switcher */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
              Demo — Sign in as:
            </p>
            <div className="grid grid-cols-4 gap-2">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.value}
                    onClick={() => setSelectedRole(role.value)}
                    className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      selectedRole === role.value
                        ? 'border-gray-900 dark:border-white bg-[#F7F7F7] dark:bg-white/10 text-gray-900 dark:text-white font-semibold'
                        : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-400'
                    }`}
                  >
                    <Icon size={16} className="text-[#555555] dark:text-[#CFCFCF]" />
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 text-xs font-semibold leading-normal">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-9"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="••••••••"
                  className="input-field pl-9 pr-10"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600 dark:text-gray-400 text-xs">Remember me</span>
              </label>
              <a href="#" className="text-xs text-gray-900 dark:text-white font-semibold hover:text-primary-400">Forgot password?</a>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3 disabled:opacity-50">
              {loading ? 'Signing In...' : 'Sign In'} <ArrowRight size={16} />
            </button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-900 px-3">
              or continue with
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200">
            <Globe size={18} className="text-gray-900 dark:text-white" />
            Continue with Google
          </button>

          <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-5">
            Don't have an account?{' '}
            <Link to="/register" className="text-gray-900 dark:text-white font-semibold font-semibold hover:text-primary-400">
              Join FEN Free
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
