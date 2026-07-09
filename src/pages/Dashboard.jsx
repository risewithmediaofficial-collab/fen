import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Briefcase, BookOpen, Users, Bell, TrendingUp,
  Calendar, Award, MessageCircle, Star, ArrowRight, Plus, CheckCircle,
  Clock, MapPin, Building2, Settings
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { FadeInWhenVisible, StaggerContainer, fadeInUp } from '../components/ui/AnimationUtils';
import { jobs, events, trainings } from '../data/mockData';

// ── Student Dashboard ────────────────────────────────────────────
function StudentDashboard({ user }) {
  const [bookedSessions] = useState(() => {
    return JSON.parse(localStorage.getItem('fen_booked_sessions') || '[]');
  });

  const stats = [
    { label: 'Enrolled Courses', value: 2, icon: BookOpen, color: 'from-gray-700 to-gray-800', bg: 'bg-gray-200/50 dark:bg-white/10' },
    { label: 'Applications', value: 3, icon: Briefcase, color: 'from-gray-750 to-gray-850', bg: 'bg-gray-200/50 dark:bg-white/10' },
    { label: 'Sessions Booked', value: bookedSessions.length, icon: Calendar, color: 'from-gray-700 to-gray-800', bg: 'bg-gray-200/50 dark:bg-white/10' },
    { label: 'Certificates', value: 1, icon: Award, color: 'from-gray-700 to-gray-800', bg: 'bg-gray-200/50 dark:bg-white/10' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="glass-card-light p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-white font-bold text-xl">
            {user.avatar}
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">
              Welcome back, {user.name.split(' ')[0]}! 👋
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.college} · {user.location}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 w-32 bg-gray-200 dark:bg-dark-800 rounded-full overflow-hidden">
                <div className="h-full w-3/5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-full" />
              </div>
              <span className="text-xs text-gray-500">60% profile complete</span>
            </div>
          </div>
        </div>
        <Link to="/training" className="btn-primary shrink-0">
          <Plus size={15} /> Enroll in Training
        </Link>
      </div>

      {/* Stats */}
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.07}>
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeInUp} className="stat-card">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-3`}>
              <s.icon size={18} className={`bg-gradient-to-r ${s.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
            </div>
            <div className="font-display font-bold text-2xl text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </StaggerContainer>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 glass-card-light p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">Upcoming Sessions</h3>
            <Link to="/training" className="text-xs text-gray-900 dark:text-white font-semibold flex items-center gap-1">View all <ArrowRight size={12} /></Link>
          </div>
          <div className="space-y-3">
            {bookedSessions.length === 0 ? (
              <div className="text-center py-6 text-xs text-gray-500 dark:text-gray-500 bg-gray-50/50 dark:bg-[#111111]/30 rounded-xl border border-dashed border-black/5 dark:border-white/5">
                No booked connections yet.
                <br />
                <Link to="/mentorship" className="text-gray-900 dark:text-white font-semibold underline mt-1.5 inline-block">
                  Book a Mentor Session →
                </Link>
              </div>
            ) : (
              bookedSessions.slice(0, 3).map((session) => (
                <div key={session.id} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-dark-900">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {session.date.split('-')[2] || 'S'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900 dark:text-white truncate">{session.targetName}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {session.targetType} · {session.date} at {session.time}
                    </div>
                  </div>
                  <span className="badge bg-emerald-500/10 text-emerald-500 border-0 text-[10px] shrink-0">Booked</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card-light p-6">
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { label: 'Browse Jobs', icon: Briefcase, href: '/jobs', color: 'text-gray-900 dark:text-white' },
              { label: 'Book Mentorship', icon: Users, href: '/mentorship', color: 'text-gray-900 dark:text-white' },
              { label: 'View Schemes', icon: Building2, href: '/schemes', color: 'text-gray-900 dark:text-white' },
              { label: 'Join Community', icon: MessageCircle, href: '/networking', color: 'text-gray-900 dark:text-white font-semibold' },
              { label: 'Upcoming Events', icon: Calendar, href: '/events', color: 'text-gray-900 dark:text-white' },
            ].map((a) => (
              <Link key={a.label} to={a.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 group">
                <a.icon size={16} className={`${a.color} shrink-0`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">{a.label}</span>
                <ArrowRight size={12} className="text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="glass-card-light p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">Recommended Jobs</h3>
          <Link to="/jobs" className="text-xs text-gray-900 dark:text-white font-semibold flex items-center gap-1">See all <ArrowRight size={12} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="p-4 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-100 dark:border-white/10">
              <div className="font-semibold text-sm text-gray-900 dark:text-white mb-0.5">{job.title}</div>
              <div className="text-xs text-gray-900 dark:text-white font-semibold mb-2">{job.company}</div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                <MapPin size={10} /> {job.location}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 dark:text-white font-bold dark:text-emerald-400">{job.salary}</span>
                <Link to="/jobs" className="text-xs text-gray-900 dark:text-white font-semibold font-semibold">Apply →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mentor Dashboard ─────────────────────────────────────────────
function MentorDashboard({ user }) {
  return (
    <div className="space-y-8">
      <div className="glass-card-light p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-white font-bold text-xl">
            {user.avatar}
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.expertise?.join(' · ')}</p>
          </div>
        </div>
        <button className="btn-primary shrink-0"><Plus size={15} /> Schedule Session</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Sessions', value: user.sessions, icon: Calendar, color: 'text-gray-900 dark:text-white' },
          { label: 'Active Mentees', value: 12, icon: Users, color: 'text-gray-900 dark:text-white font-semibold' },
          { label: 'Pending Requests', value: 5, icon: Bell, color: 'text-gray-900 dark:text-white' },
          { label: 'Rating', value: '4.9★', icon: Star, color: 'text-gray-900 dark:text-white' },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <s.icon size={22} className={`${s.color} mx-auto mb-2`} />
            <div className="font-display font-bold text-2xl text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card-light p-6">
        <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Mentorship Requests</h3>
        <div className="space-y-3">
          {['Manikandan R. — Web Development', 'Preethi K. — Career Guidance', 'Arun S. — Startup Idea Validation'].map((req, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-900">
              <div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">{req}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Pending · {i + 1}h ago</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold hover:bg-gray-900 dark:bg-white text-white dark:text-gray-950 hover:text-white transition-all">Accept</button>
                <button className="px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold hover:bg-gray-900 dark:bg-white text-white dark:text-gray-950 hover:text-white transition-all">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Industry Dashboard ────────────────────────────────────────────
function IndustryDashboard({ user }) {
  return (
    <div className="space-y-8">
      <div className="glass-card-light p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-white font-bold text-xl">
            {user.avatar}
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.category} · {user.location}</p>
          </div>
        </div>
        <button className="btn-primary shrink-0"><Plus size={15} /> Post Job</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Open Positions', value: 4, icon: Briefcase, color: 'text-gray-900 dark:text-white' },
          { label: 'Applications', value: 28, icon: Users, color: 'text-gray-900 dark:text-white' },
          { label: 'Enquiries', value: 12, icon: MessageCircle, color: 'text-gray-900 dark:text-white font-semibold' },
          { label: 'Interns Hired', value: 6, icon: CheckCircle, color: 'text-gray-900 dark:text-white' },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <s.icon size={22} className={`${s.color} mx-auto mb-2`} />
            <div className="font-display font-bold text-2xl text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card-light p-6">
        <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Recent Applications</h3>
        <div className="space-y-3">
          {[
            { name: 'Manikandan R.', role: 'Software Developer', exp: 'Fresher', status: 'Review' },
            { name: 'Karthik S.', role: 'CNC Operator', exp: '1 yr', status: 'Shortlisted' },
            { name: 'Priya M.', role: 'Marketing Intern', exp: 'Fresher', status: 'Interview' },
          ].map((a, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-dark-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-950 flex items-center justify-center text-white text-xs font-bold">
                  {a.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{a.name}</div>
                  <div className="text-xs text-gray-500">{a.role} · {a.exp}</div>
                </div>
              </div>
              <span className={`badge ${a.status === 'Interview' ? 'badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5' : a.status === 'Shortlisted' ? 'badge bg-gray-200/60 text-gray-900 border border-gray-300 dark:bg-white/10 dark:text-white dark:border-white/10' : 'badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5'}`}>
                {a.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Admin Dashboard ───────────────────────────────────────────────
function AdminDashboard({ user }) {
  const metrics = [
    { label: 'Total Users', value: '1,240', change: '+48 this week', icon: Users, color: 'from-gray-700 to-gray-800' },
    { label: 'Active Industries', value: '86', change: '+3 this week', icon: Building2, color: 'from-gray-700 to-gray-800' },
    { label: 'Jobs Posted', value: '320', change: '+22 this week', icon: Briefcase, color: 'from-gray-750 to-gray-850' },
    { label: 'Pending Approvals', value: '14', change: 'Needs review', icon: Clock, color: 'from-red-500 to-pink-600' },
  ];

  return (
    <div className="space-y-8">
      <div className="glass-card-light p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-white font-bold text-xl">
            {user.avatar}
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-sm text-gray-500">Platform Administrator</p>
          </div>
        </div>
        <button className="btn-primary shrink-0"><Settings size={15} /> Platform Settings</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card-light p-5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-3`}>
              <m.icon size={18} className="text-white" />
            </div>
            <div className="font-display font-bold text-2xl text-gray-900 dark:text-white">{m.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{m.label}</div>
            <div className="text-[10px] text-gray-900 dark:text-white mt-1 font-medium">{m.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card-light p-6">
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Pending Approvals</h3>
          <div className="space-y-3">
            {[
              { type: 'New Industry', name: 'KGI Plastics Ltd', time: '2h ago' },
              { type: 'Mentor', name: 'Dr. Senthil Kumar', time: '5h ago' },
              { type: 'Gov Scheme', name: 'CMEGP Scheme Update', time: '1d ago' },
              { type: 'Event', name: 'Startup Summit Krishnagiri', time: '2d ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-900">
                <div>
                  <span className="badge bg-gray-100 text-gray-850 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/5 text-[10px] mb-1">{item.type}</span>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold">Approve</button>
                  <button className="px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-semibold">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card-light p-6">
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Platform Activity</h3>
          <div className="space-y-3">
            {[
              { label: 'Students registered today', value: 12, color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-950' },
              { label: 'Jobs applied today', value: 34, color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-950' },
              { label: 'Mentorship sessions today', value: 8, color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-950' },
              { label: 'Scheme views today', value: 56, color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-950' },
            ].map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-600 dark:text-gray-400">{a.label}</span>
                  <span className="font-bold text-gray-900 dark:text-white">{a.value}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-dark-800 rounded-full">
                  <div className={`h-full ${a.color} rounded-full`} style={{ width: `${(a.value / 60) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard Page ───────────────────────────────────────────
export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900 pt-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">Sign in to access Dashboard</h2>
          <p className="text-gray-500 mb-6">Create your free FEN account to get started</p>
          <div className="flex gap-3 justify-center">
            <Link to="/login" className="btn-secondary">Sign In</Link>
            <Link to="/register" className="btn-primary">Join FEN</Link>
          </div>
        </div>
      </div>
    );
  }

  const roleLabels = { student: 'Student', mentor: 'Mentor', industry: 'Industry', admin: 'Admin' };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <FadeInWhenVisible className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <LayoutDashboard size={12} />
            <span>Dashboard</span>
            <span>·</span>
            <span className="text-gray-900 dark:text-white font-semibold capitalize">{user.role}</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
            {roleLabels[user.role]} Dashboard
          </h1>
        </FadeInWhenVisible>

        {/* Role-based Dashboard */}
        {user.role === 'student' && <StudentDashboard user={user} />}
        {user.role === 'mentor' && <MentorDashboard user={user} />}
        {user.role === 'industry' && <IndustryDashboard user={user} />}
        {user.role === 'admin' && <AdminDashboard user={user} />}
      </div>
    </div>
  );
}
