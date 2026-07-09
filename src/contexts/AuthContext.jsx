import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const mockUsers = {
  student: {
    id: 1,
    name: "Manikandan R.",
    email: "mani@example.com",
    role: "student",
    avatar: "MR",
    college: "GCE Krishnagiri",
    location: "Krishnagiri",
    enrolled: 2,
    applications: 3,
  },
  mentor: {
    id: 2,
    name: "Dr. Rajesh Kumar",
    email: "rajesh@example.com",
    role: "mentor",
    avatar: "RK",
    expertise: ["Entrepreneurship", "IoT"],
    sessions: 320,
    location: "Krishnagiri",
  },
  industry: {
    id: 3,
    name: "Hosur Auto Components",
    email: "industry@example.com",
    role: "industry",
    avatar: "HA",
    category: "Automobile",
    location: "Hosur",
  },
  admin: {
    id: 4,
    name: "Admin FEN",
    email: "admin@fen.in",
    role: "admin",
    avatar: "AF",
    location: "Krishnagiri",
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (role = 'student') => {
    setUser(mockUsers[role] || mockUsers.student);
  };

  const logout = () => setUser(null);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
