import React from 'react';
import { Search, Heart, ShieldCheck } from 'lucide-react';
import { Container, Badge } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#08090a] border-t border-white/[0.08] pt-16 pb-12 text-gray-400">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0a0c] rounded-[10px] flex items-center justify-center">
                  <Search className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Lost<span className="text-indigo-400">&</span>Found
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Reuniting what matters, restoring peace of mind. An intelligent platform that connects people, matches items, and brings everything back where it belongs.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Badge variant="verified" dot size="sm">
                System Operational
              </Badge>
              <Badge variant="primary" size="sm">
                Campus Verified
              </Badge>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={ROUTE_PATHS.PUBLIC.BROWSE} className="hover:text-white transition-colors">
                  Browse Items
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.PUBLIC.REPORT} className="hover:text-white transition-colors">
                  Report Lost Item
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.PUBLIC.REPORT} className="hover:text-white transition-colors">
                  Report Found Item
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.PUBLIC.HOW_IT_WORKS} className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Dashboards Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={ROUTE_PATHS.USER.DASHBOARD} className="hover:text-white transition-colors">
                  User Dashboard
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.STAFF.DASHBOARD} className="hover:text-white transition-colors">
                  Staff Verification
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.ADMIN.DASHBOARD} className="hover:text-white transition-colors">
                  Admin Operations
                </a>
              </li>
              <li>
                <a href={ROUTE_PATHS.PUBLIC.LOGIN} className="hover:text-white transition-colors">
                  Account Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Trust & Security</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ownership Proof</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Location Privacy</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Audit Verified</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Lost & Found Platform. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for community recovery</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500/20 inline" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
