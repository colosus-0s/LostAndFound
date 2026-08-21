import React from 'react';

interface ReportProgressProps {
  currentStep: number; // 1 to 7
  totalSteps: number;
  stepsList: string[];
  onStepClick: (stepIndex: number) => void;
}

export const ReportProgress: React.FC<ReportProgressProps> = ({
  currentStep,
  totalSteps,
  stepsList,
  onStepClick,
}) => {
  return (
    <div className="w-full space-y-4 mb-8">
      {/* Desktop Horizontal Stepper */}
      <div className="hidden lg:flex items-center justify-between relative bg-[#0A0D18]/90 border border-indigo-950/80 rounded-2xl p-4 shadow-lg">
        {stepsList.map((label, idx) => {
          const stepNum = idx + 1;
          const isCurrent = stepNum === currentStep;
          const isCompleted = stepNum < currentStep;

          return (
            <button
              key={label}
              disabled={stepNum > currentStep}
              onClick={() => onStepClick(stepNum)}
              className={`flex items-center gap-2 text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                isCurrent
                  ? 'text-violet-300'
                  : isCompleted
                  ? 'text-emerald-400 hover:text-emerald-300 cursor-pointer'
                  : 'text-slate-500'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                  isCurrent
                    ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]'
                    : isCompleted
                    ? 'bg-emerald-950 border border-emerald-500/50 text-emerald-400'
                    : 'bg-slate-900 border border-slate-800 text-slate-500'
                }`}
              >
                {isCompleted ? '✓' : stepNum}
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Compact Stepper */}
      <div className="lg:hidden flex items-center justify-between bg-[#0A0D18]/90 border border-indigo-950/80 rounded-2xl p-4 shadow-md text-xs font-bold">
        <div className="flex items-center gap-2 text-violet-300">
          <span className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-black">
            {currentStep}
          </span>
          <span>Step {currentStep} of {totalSteps}: <strong className="text-white font-extrabold">{stepsList[currentStep - 1]}</strong></span>
        </div>

        <div className="w-24 h-2 bg-slate-900 rounded-full overflow-hidden border border-indigo-950">
          <div
            className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
