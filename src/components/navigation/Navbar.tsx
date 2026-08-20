import React, { useState } from 'react';
import { Search, PlusCircle, Menu, X, Compass, Shield, Info, Home as HomeIcon } from 'lucide-react';
import { Button, Container } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = ROUTE_PATHS.PUBLIC.HOME; // Active route is Home for this execution

  const navLinks = [
    { label: 'Home', href: ROUTE_PATHS.PUBLIC.HOME, icon: HomeIcon },
    { label: 'Browse', href: ROUTE_PATHS.PUBLIC.BROWSE, icon: Compass },
    { label: 'How It Works', href: ROUTE_PATHS.PUBLIC.HOW_IT_WORKS, icon: Shield },
    { label: 'About', href: ROUTE_PATHS.PUBLIC.ABOUT, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-white/[0.08] nav-header">
      <Container size="xl">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href={ROUTE_PATHS.PUBLIC.HOME}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-xl p-1 transition-opacity hover:opacity-90 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[10px] flex items-center justify-center">
                <Search className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                Lost<span className="text-indigo-400">&</span>Found
              </span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase -mt-1">
                PLATFORM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121318]/90 px-4 py-1.5 rounded-full border border-white/[0.08]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === currentPath;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full shadow-sm shadow-indigo-500" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href={ROUTE_PATHS.PUBLIC.LOGIN}>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </a>
            <a href={ROUTE_PATHS.PUBLIC.REPORT}>
              <Button
                variant="primary"
                size="sm"
                leftIcon={<PlusCircle className="w-4 h-4" />}
                className="shadow-lg shadow-indigo-600/25"
              >
                + Report Item
              </Button>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#121318] border border-white/[0.08] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121318]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
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
                      ? 'bg-indigo-500/10 text-white border border-indigo-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-5 h-5 text-indigo-400" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a href={ROUTE_PATHS.PUBLIC.LOGIN} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" fullWidth size="md">
                Sign In
              </Button>
            </a>
            <a href={ROUTE_PATHS.PUBLIC.REPORT} onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="primary"
                fullWidth
                size="md"
                leftIcon={<PlusCircle className="w-4 h-4" />}
              >
                + Report Item
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
