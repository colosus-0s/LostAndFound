import React from 'react';
import { FileText, Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Container, Card } from '../ui';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: '1. Report',
      description: 'Report your lost or found item in just a few clicks with details and photos.',
      icon: FileText,
      color: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/40',
    },
    {
      number: '2',
      title: '2. Match',
      description: 'Our smart system matches items instantly using category, brand, and location traits.',
      icon: Sparkles,
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-500/40',
    },
    {
      number: '3',
      title: '3. Verify',
      description: 'We verify details and proof of ownership to ensure a safe, secure handover.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/40',
    },
    {
      number: '4',
      title: '4. Reunite',
      description: 'Get your item back, confirm recovery, and restore peace of mind.',
      icon: Heart,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/40',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0c] border-t border-white/[0.08] relative">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple steps, meaningful results
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Our streamlined process makes it easy to report, match, and recover lost belongings.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                variant="surface"
                interactive
                className={`flex flex-col justify-between relative group ${step.borderColor}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-white/[0.04] ${step.color} border border-white/[0.08]`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-gray-700 group-hover:text-gray-500 transition-colors">
                      0{step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-gray-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
