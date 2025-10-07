import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { Dashboard } from '../pages/Dashboard';
import { LoopPage } from '../pages/LoopPage';
import { RewardsHub } from '../pages/RewardsHub';
import { Checkout } from '../pages/Checkout';
import { AdminPanel } from '../pages/AdminPanel';
import { Login } from '../pages/Login';
import { Home, Trophy, Settings, LogOut } from 'lucide-react';

const AppLayout: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-[#722f37] to-[#8b3a62] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/dashboard" className="text-2xl font-bold flex items-center gap-2">
                <span className="text-[#d4af37]">⚡</span>
                BoDiGi Learn & Earn
              </Link>
              
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="hover:text-[#d4af37] transition flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <Link to="/rewards" className="hover:text-[#d4af37] transition flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span className="hidden sm:inline">Rewards</span>
                </Link>
                <Link to="/admin" className="hover:text-[#d4af37] transition flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <span className="hidden sm:inline">Admin</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loop" element={<LoopPage />} />
          <Route path="/rewards" element={<RewardsHub />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm opacity-75">
              ©2025 Bobbie Gray. BoDiGi™, Aura™, and Boltz™ are trademarks of Bobbie Digital™.
            </p>
            <p className="text-sm opacity-75 mt-2">Built with Famous.AI</p>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default AppLayout;
