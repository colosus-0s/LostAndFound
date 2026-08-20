import React, { useState } from 'react';
import { Search, PlusCircle, Menu, X, Shield, Compass, Info, Home as HomeIcon } from 'lucide-react';
import { Button, Container } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: ROUTE_PATHS.PUBLIC.HOME, icon: HomeIcon },
    { label: 'Browse', href: ROUTE_PATHS.PUBLIC.BROWSE, icon: Compass },
    { label: 'How It Works', href: ROUTE_PATHS.PUBLIC.HOW_IT_WORKS, icon: Shield },
    { label: 'About', href: ROUTE_PATHS.PUBLIC.ABOUT, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <Container size="xl">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href={ROUTE_PATHS.PUBLIC.HOME}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-xl p-1 transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[10px] flex items-center justify-center">
                <Search className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                Lost<span className="text-indigo-400">&</span>Found
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase -mt-1">
                Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121318] px-4 py-1.5 rounded-full border border-white/[0.08]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Desktop CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href={ROUTE_PATHS.PUBLIC.LOGIN}>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </a>
            <a href={ROUTE_PATHS.PUBLIC.REPORT}>
              <Button
                variant="primary"
                size="sm"
                leftIcon={<PlusCircle className="w-4 h-4" />}
              >
                Report Item
              </Button>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#121318] border border-white/[0.08] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121318] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
                >
                  <Icon className="w-5 h-5 text-indigo-400" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            <a href={ROUTE_PATHS.PUBLIC.LOGIN} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" fullWidth size="md">
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
                Report Item
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
