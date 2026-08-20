import React, { useState } from 'react';
import { Search, PlusCircle, Menu, X, Compass, Shield, Info, Home as HomeIcon } from 'lucide-react';
import { ROUTE_PATHS } from '../../routes';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = ROUTE_PATHS.PUBLIC.HOME;

  const navLinks = [
    { label: 'Home', href: ROUTE_PATHS.PUBLIC.HOME, icon: HomeIcon },
    { label: 'Browse', href: ROUTE_PATHS.PUBLIC.BROWSE, icon: Compass },
    { label: 'How It Works', href: ROUTE_PATHS.PUBLIC.HOW_IT_WORKS, icon: Shield },
    { label: 'About', href: ROUTE_PATHS.PUBLIC.ABOUT, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#06080E]/85 backdrop-blur-xl border-b border-white/[0.08] nav-header">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo (Left) */}
          <a
            href={ROUTE_PATHS.PUBLIC.HOME}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 rounded-xl p-1 transition-opacity hover:opacity-90 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366F1] via-[#818CF8] to-[#22D3EE] p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#06080E] rounded-[10px] flex items-center justify-center">
                <Search className="w-5 h-5 text-[#6366F1]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1 leading-none">
                Lost<span className="text-[#6366F1]">&</span>Found
              </span>
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
                PLATFORM
              </span>
            </div>
          </a>

          {/* Centered Navigation Links (Center) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === currentPath;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 rounded-lg ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#6366F1] rounded-full shadow-sm shadow-[#6366F1]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a
              href={ROUTE_PATHS.PUBLIC.LOGIN}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 rounded-lg px-2 py-1"
            >
              Sign In
            </a>
            <a href={ROUTE_PATHS.PUBLIC.REPORT}>
              <button
                type="button"
                className="bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ Report Item</span>
              </button>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#111827] border border-white/10 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === currentPath;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#6366F1]/15 text-white border border-[#6366F1]/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#6366F1]" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={ROUTE_PATHS.PUBLIC.LOGIN}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-gray-300 hover:text-white border border-white/10 rounded-xl"
            >
              Sign In
            </a>
            <a
              href={ROUTE_PATHS.PUBLIC.REPORT}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Report Item</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
