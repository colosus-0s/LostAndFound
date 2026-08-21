import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#04060A]/90 backdrop-blur-md border-b border-indigo-950/30 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 border border-violet-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:border-violet-400 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300">
            <Search className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none font-sans">
              Lost & Found
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 mt-1">
              PLATFORM
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`relative py-2 transition-colors ${
              isActive('/') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
            )}
          </Link>
          <Link
            to="/browse"
            className={`relative py-2 transition-colors ${
              isActive('/browse') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Browse
            {isActive('/browse') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
            )}
          </Link>
          <Link
            to="/how-it-works"
            className={`relative py-2 transition-colors ${
              isActive('/how-it-works') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            How It Works
            {isActive('/how-it-works') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
            )}
          </Link>
          <Link
            to="/about"
            className={`relative py-2 transition-colors ${
              isActive('/about') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            About
            {isActive('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
            )}
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/report"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.55)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Report Item</span>
          </Link>
        </div>

      </div>
    </header>
  );
};
