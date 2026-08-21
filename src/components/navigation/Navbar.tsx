import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-colors shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 transition-all duration-200">
            <Search className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#111318] font-black text-xl tracking-tight leading-none font-sans">
              Lost & Found
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-gray-500 mt-1">
              COMMUNITY PLATFORM
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
          <Link
            to="/"
            className={`relative py-2 transition-colors ${
              isActive('/') ? 'text-[#111318]' : 'text-gray-600 hover:text-[#111318]'
            }`}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>
          <Link
            to="/browse"
            className={`relative py-2 transition-colors ${
              isActive('/browse') ? 'text-[#111318]' : 'text-gray-600 hover:text-[#111318]'
            }`}
          >
            Browse
            {isActive('/browse') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>
          <Link
            to="/how-it-works"
            className={`relative py-2 transition-colors ${
              isActive('/how-it-works') ? 'text-[#111318]' : 'text-gray-600 hover:text-[#111318]'
            }`}
          >
            How It Works
            {isActive('/how-it-works') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>
          <Link
            to="/about"
            className={`relative py-2 transition-colors ${
              isActive('/about') ? 'text-[#111318]' : 'text-gray-600 hover:text-[#111318]'
            }`}
          >
            About
            {isActive('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="text-sm font-bold text-gray-700 hover:text-[#111318] transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/report"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Report Item</span>
          </Link>
        </div>

      </div>
    </header>
  );
};
