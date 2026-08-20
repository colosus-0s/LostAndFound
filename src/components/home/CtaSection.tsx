import React from 'react';
import { PlusCircle, Search } from 'lucide-react';
import { Container, Button } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0c] via-[#0e0f14] to-[#08090a] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      <Container size="lg" className="relative z-10 text-center">
        <div className="bg-gradient-to-b from-[#121318] to-[#1a1c23] p-10 sm:p-16 rounded-3xl border border-white/[0.12] shadow-2xl space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
              RECOVERY JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Lost something? <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Let’s help bring it home.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
              Join thousands of community members reuniting belongings through structured reporting and smart verification.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={ROUTE_PATHS.PUBLIC.REPORT} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<PlusCircle className="w-5 h-5" />}
                fullWidth
              >
                Report an Item
              </Button>
            </a>
            <a href={ROUTE_PATHS.PUBLIC.BROWSE} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Search className="w-5 h-5" />}
                fullWidth
              >
                Browse Found Items
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
