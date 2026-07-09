// Mock data for mentors
export const mentors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "IIT Madras | Startup Mentor",
    expertise: ["Entrepreneurship", "IoT", "Product Design"],
    rating: 4.9,
    sessions: 320,
    students: 85,
    avatar: "RK",
    color: "from-violet-500 to-indigo-600",
    available: true,
    location: "Krishnagiri",
    bio: "15+ years in product development and startup ecosystem. Helped 40+ startups scale."
  },
  {
    id: 2,
    name: "Priya Selvam",
    title: "MSME Consultant | Business Coach",
    expertise: ["MSME Registration", "GST", "Business Planning"],
    rating: 4.8,
    sessions: 215,
    students: 60,
    avatar: "PS",
    color: "from-pink-500 to-rose-600",
    available: true,
    location: "Hosur",
    bio: "Helped 100+ MSMEs get registered and access government subsidies."
  },
  {
    id: 3,
    name: "Arjun Moorthy",
    title: "Full Stack Developer | Tech Lead",
    expertise: ["Web Development", "React", "Node.js", "MongoDB"],
    rating: 4.7,
    sessions: 180,
    students: 45,
    avatar: "AM",
    color: "from-emerald-500 to-teal-600",
    available: false,
    location: "Krishnagiri",
    bio: "8 years in software engineering. Trained 200+ students in full-stack development."
  },
  {
    id: 4,
    name: "Kavitha Rajan",
    title: "HR Director | Career Coach",
    expertise: ["Career Guidance", "Resume Building", "Interview Prep"],
    rating: 4.9,
    sessions: 400,
    students: 120,
    avatar: "KR",
    color: "from-amber-500 to-orange-600",
    available: true,
    location: "Bangalore",
    bio: "Ex-TCS, Infosys HR. Placed 500+ students in top companies."
  },
  {
    id: 5,
    name: "Suresh Pandian",
    title: "Angel Investor | Startup Advisor",
    expertise: ["Funding", "Startup Strategy", "Pitch Deck", "VC"],
    rating: 4.6,
    sessions: 98,
    students: 30,
    avatar: "SP",
    color: "from-blue-500 to-cyan-600",
    available: true,
    location: "Chennai",
    bio: "Invested in 25+ startups. Advisor to StartupTN and SIDBI."
  },
  {
    id: 6,
    name: "Meena Krishnan",
    title: "Digital Marketing Expert",
    expertise: ["Digital Marketing", "SEO", "Social Media", "Branding"],
    rating: 4.8,
    sessions: 260,
    students: 70,
    avatar: "MK",
    color: "from-purple-500 to-pink-600",
    available: true,
    location: "Krishnagiri",
    bio: "Helped 80+ MSMEs build their digital presence from scratch."
  }
];

// Mock data for jobs
export const jobs = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Hosur Tech Solutions",
    type: "Full Time",
    location: "Hosur, Krishnagiri",
    salary: "₹18,000 - ₹25,000",
    qualification: "B.E / B.Tech",
    experience: "Fresher",
    tags: ["React", "Node.js", "MySQL"],
    posted: "2 days ago",
    deadline: "2026-07-30",
    urgent: true,
  },
  {
    id: 2,
    title: "CNC Machine Operator",
    company: "Brakes India Ltd",
    type: "Full Time",
    location: "Krishnagiri",
    salary: "₹15,000 - ₹22,000",
    qualification: "ITI / Diploma",
    experience: "0-2 years",
    tags: ["CNC", "Manufacturing", "Production"],
    posted: "1 day ago",
    deadline: "2026-07-25",
    urgent: false,
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "GreenLeaf Agro",
    type: "Internship",
    location: "Krishnagiri",
    salary: "₹8,000 stipend",
    qualification: "MBA / BBA",
    experience: "Fresher",
    tags: ["Marketing", "Social Media", "MS Office"],
    posted: "3 days ago",
    deadline: "2026-07-28",
    urgent: false,
  },
  {
    id: 4,
    title: "Electrical Engineer",
    company: "Suguna Power Systems",
    type: "Full Time",
    location: "Hosur",
    salary: "₹25,000 - ₹35,000",
    qualification: "B.E Electrical",
    experience: "1-3 years",
    tags: ["Electrical", "PLC", "SCADA"],
    posted: "5 days ago",
    deadline: "2026-08-10",
    urgent: false,
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "Creative Studio KGI",
    type: "Part Time",
    location: "Krishnagiri",
    salary: "₹12,000 - ₹18,000",
    qualification: "Any Degree",
    experience: "Fresher",
    tags: ["Photoshop", "Illustrator", "Figma"],
    posted: "1 week ago",
    deadline: "2026-07-31",
    urgent: false,
  },
  {
    id: 6,
    title: "Campus Recruitment Drive",
    company: "Tvs Motor Company",
    type: "Campus Hiring",
    location: "Hosur Plant",
    salary: "₹22,000 - ₹30,000",
    qualification: "B.E / Diploma",
    experience: "Fresher",
    tags: ["Automobile", "Production", "Quality"],
    posted: "2 days ago",
    deadline: "2026-07-20",
    urgent: true,
  }
];

// Mock data for events
export const events = [
  {
    id: 1,
    title: "FEN Sunday Skill Session #24",
    date: "2026-07-13",
    time: "10:00 AM - 1:00 PM",
    mode: "Offline + Online",
    topic: "AI Tools for Small Business Owners",
    speaker: "Dr. Rajesh Kumar",
    venue: "District Industries Centre, Krishnagiri",
    seats: 50,
    registered: 38,
    type: "Training",
    color: "from-violet-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Startup Pitch Day - Krishnagiri",
    date: "2026-07-20",
    time: "2:00 PM - 6:00 PM",
    mode: "Offline",
    topic: "Present Your Startup to Investors",
    speaker: "Panel of Investors",
    venue: "Collectorate, Krishnagiri",
    seats: 20,
    registered: 15,
    type: "Pitching",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 3,
    title: "MSME Digital Marketing Workshop",
    date: "2026-07-27",
    time: "9:00 AM - 5:00 PM",
    mode: "Offline",
    topic: "Grow Your Business Online",
    speaker: "Meena Krishnan",
    venue: "MSME Office, Hosur",
    seats: 40,
    registered: 22,
    type: "Workshop",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    title: "Industrial Visit - Brakes India",
    date: "2026-08-03",
    time: "8:00 AM - 1:00 PM",
    mode: "Offline",
    topic: "Manufacturing Process & Career Paths",
    speaker: "Brakes India HR Team",
    venue: "Brakes India, Padi, Krishnagiri",
    seats: 30,
    registered: 30,
    type: "Industrial Visit",
    color: "from-blue-500 to-cyan-600"
  }
];

// Mock data for govt schemes
export const govtSchemes = [
  {
    id: 1,
    title: "PMEGP - Prime Minister's Employment Generation Programme",
    department: "KVIC / DIC",
    category: "Loan",
    maxAmount: "₹50 Lakhs",
    subsidy: "15-35%",
    eligibility: "18+ years, 8th pass",
    description: "Provides financial assistance for setting up new micro-enterprises and generating employment.",
    tags: ["Manufacturing", "Service", "Trading"],
    link: "https://www.kviconline.gov.in",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    title: "Mudra Loan - Micro Units Development",
    department: "SIDBI / Banks",
    category: "Loan",
    maxAmount: "₹10 Lakhs",
    subsidy: "Collateral Free",
    eligibility: "Any business owner",
    description: "Shishu (₹50K), Kishore (₹5L), Tarun (₹10L) — for micro & small enterprises.",
    tags: ["Shishu", "Kishore", "Tarun"],
    link: "https://www.mudra.org.in",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Naan Mudhalvan - Tamil Nadu Skill Program",
    department: "TNSDC",
    category: "Skill Training",
    maxAmount: "Free Training",
    subsidy: "100% Funded",
    eligibility: "Students 18-35 years",
    description: "World-class skill training for Tamil Nadu students in IT, manufacturing, healthcare and more.",
    tags: ["IT", "Manufacturing", "Healthcare"],
    link: "https://www.naanmudhalvan.tn.gov.in",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 4,
    title: "StartupTN - Startup Ecosystem Support",
    department: "StartupTN",
    category: "Startup Funding",
    maxAmount: "₹15 Lakhs",
    subsidy: "Seed Grant",
    eligibility: "Registered Startup in TN",
    description: "Supports Tamil Nadu startups with funding, mentoring, infrastructure and market access.",
    tags: ["Seed Fund", "Incubation", "Mentoring"],
    link: "https://startuptn.in",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    title: "MSME Registration - Udyam Portal",
    department: "MSME Ministry",
    category: "Registration",
    maxAmount: "Free",
    subsidy: "Multiple Benefits",
    eligibility: "Any MSME owner",
    description: "Official MSME registration giving access to government schemes, loans, and subsidies.",
    tags: ["Registration", "Subsidy", "Loans"],
    link: "https://udyamregistration.gov.in",
    color: "from-amber-500 to-yellow-500"
  },
  {
    id: 6,
    title: "DIC Services - District Industries Centre",
    department: "DIC Krishnagiri",
    category: "Government Support",
    maxAmount: "Various",
    subsidy: "Multiple",
    eligibility: "Krishnagiri residents",
    description: "One-stop centre for all industrial and business support services in Krishnagiri district.",
    tags: ["Registration", "Guidance", "Subsidy"],
    link: "#",
    color: "from-orange-500 to-red-500"
  }
];

// Mock data for industries
export const industries = [
  {
    id: 1,
    name: "Hosur Auto Components",
    category: "Automobile",
    products: ["CNC Parts", "Engine Components", "Precision Tools"],
    location: "Hosur, Krishnagiri",
    employees: "200-500",
    established: 2005,
    rating: 4.7,
    verified: true,
    hiring: true,
    internship: true,
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    name: "KGI Textile Mills",
    category: "Textile",
    products: ["Cotton Fabric", "Yarn", "Garments"],
    location: "Krishnagiri",
    employees: "100-200",
    established: 1998,
    rating: 4.5,
    verified: true,
    hiring: false,
    internship: true,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    name: "GreenLeaf Agro Industries",
    category: "Agriculture",
    products: ["Mango Products", "Tomato Paste", "Organic Fertilizer"],
    location: "Denkanikottai, Krishnagiri",
    employees: "50-100",
    established: 2010,
    rating: 4.8,
    verified: true,
    hiring: true,
    internship: false,
    color: "from-emerald-500 to-green-600"
  },
  {
    id: 4,
    name: "Suguna Power Systems",
    category: "Electrical",
    products: ["Transformers", "Switchgear", "Control Panels"],
    location: "Hosur",
    employees: "100-200",
    established: 2012,
    rating: 4.6,
    verified: true,
    hiring: true,
    internship: true,
    color: "from-amber-500 to-yellow-600"
  }
];

// Mock trainings
export const trainings = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Arjun Moorthy",
    duration: "8 Weeks",
    sessions: 8,
    nextSession: "2026-07-13",
    enrolled: 45,
    maxSeats: 60,
    level: "Beginner",
    tags: ["HTML", "CSS", "React", "Node.js"],
    color: "from-violet-500 to-indigo-600",
    free: true
  },
  {
    id: 2,
    title: "Digital Marketing for MSMEs",
    instructor: "Meena Krishnan",
    duration: "4 Weeks",
    sessions: 4,
    nextSession: "2026-07-13",
    enrolled: 30,
    maxSeats: 40,
    level: "Beginner",
    tags: ["SEO", "Social Media", "Google Ads"],
    color: "from-pink-500 to-rose-600",
    free: true
  },
  {
    id: 3,
    title: "Entrepreneurship & Business Planning",
    instructor: "Dr. Rajesh Kumar",
    duration: "6 Weeks",
    sessions: 6,
    nextSession: "2026-07-13",
    enrolled: 52,
    maxSeats: 60,
    level: "Intermediate",
    tags: ["Business Plan", "Finance", "Marketing"],
    color: "from-amber-500 to-orange-600",
    free: true
  },
  {
    id: 4,
    title: "MSME Registration & Government Schemes",
    instructor: "Priya Selvam",
    duration: "2 Weeks",
    sessions: 2,
    nextSession: "2026-07-13",
    enrolled: 38,
    maxSeats: 50,
    level: "Beginner",
    tags: ["MSME", "GST", "Udyam"],
    color: "from-emerald-500 to-teal-600",
    free: true
  }
];

// Stats
export const stats = [
  { label: "Students Joined", value: 1240, suffix: "+", icon: "👨‍🎓" },
  { label: "Mentors Active", value: 48, suffix: "+", icon: "🧑‍🏫" },
  { label: "Industries Listed", value: 86, suffix: "+", icon: "🏭" },
  { label: "Jobs Posted", value: 320, suffix: "+", icon: "💼" },
  { label: "Training Sessions", value: 24, suffix: "", icon: "📚" },
  { label: "Placements", value: 180, suffix: "+", icon: "🎯" },
];

// User types / ecosystem
export const userTypes = [
  { id: 1, label: "Students", icon: "🎓", desc: "Learn, grow, and get placed", color: "from-violet-500 to-indigo-500", count: "1,240+" },
  { id: 2, label: "Mentors", icon: "🧑‍🏫", desc: "Guide and inspire the next gen", color: "from-blue-500 to-cyan-500", count: "48+" },
  { id: 3, label: "Colleges", icon: "🏛️", desc: "Connect with industry and students", color: "from-emerald-500 to-teal-500", count: "12+" },
  { id: 4, label: "Industries", icon: "🏭", desc: "Find talent, post openings", color: "from-amber-500 to-orange-500", count: "86+" },
  { id: 5, label: "MSMEs", icon: "🏪", desc: "Market products, get support", color: "from-pink-500 to-rose-500", count: "145+" },
  { id: 6, label: "Startups", icon: "🚀", desc: "Access funding and mentoring", color: "from-purple-500 to-violet-500", count: "34+" },
  { id: 7, label: "Government", icon: "🏛️", desc: "Share schemes and opportunities", color: "from-red-500 to-orange-500", count: "8+" },
  { id: 8, label: "Investors", icon: "💰", desc: "Discover promising startups", color: "from-yellow-500 to-amber-500", count: "20+" },
  { id: 9, label: "Schools", icon: "🏛️", desc: "Connect with colleges and mentors", color: "from-yellow-500 to-amber-500", count: "20+" },
  { id: 10, label: "Business owners", icon: "💰", desc: "Market products, get support", color: "from-yellow-500 to-amber-500", count: "20+" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Manikandan R.",
    role: "Student → Software Developer",
    company: "Hosur Tech Solutions",
    quote: "FEN connected me with a mentor who helped me land my first job in just 3 months. The Sunday training sessions are gold!",
    avatar: "MR",
    color: "from-violet-500 to-indigo-600"
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    role: "MSME Owner",
    company: "Sakthi Handicrafts, Krishnagiri",
    quote: "Through FEN's marketplace, I got my first online orders and connected with a distributor in Chennai. My revenue doubled!",
    avatar: "LD",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    name: "Vijay Anand",
    role: "Startup Founder",
    company: "AgriTech Krishnagiri",
    quote: "FEN's pitch event introduced me to an angel investor who funded ₹10 lakhs for my agri-tech startup.",
    avatar: "VA",
    color: "from-emerald-500 to-teal-600"
  }
];
