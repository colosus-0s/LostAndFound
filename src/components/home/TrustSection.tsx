import React from 'react';
import { ShieldCheck, Lock, Users, Zap } from 'lucide-react';
import { Container, Card } from '../ui';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Secure & Private',
      description: 'Location data is protected with spatial privacy controls. Sensitive coordinates are accessible only to verified staff.',
      icon: Lock,
      color: 'text-indigo-400',
    },
    {
      title: 'Smart Matching',
      description: 'Deterministic attribute comparison evaluates category, location, color, and timing traits for high match confidence.',
      icon: Zap,
      color: 'text-purple-400',
    },
    {
      title: 'Verified Ownership',
      description: 'Claims require verification of distinct item details or serial proof before any handover is authorized.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      title: 'Community Driven',
      description: 'Built to connect people across campus networks, fostering trust and accountability for shared spaces.',
      icon: Users,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0c] border-t border-white/[0.08] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            SECURITY & TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for security, privacy, and peace of mind
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We prioritize data protection and verifiable proof to ensure recovered belongings reach their true owners safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} variant="surface" className="space-y-4">
                <div className={`p-3.5 rounded-xl bg-white/[0.04] ${item.color} border border-white/[0.08] inline-block`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
