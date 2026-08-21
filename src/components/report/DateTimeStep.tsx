import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface DateTimeStepProps {
  date: string;
  approxTime: string;
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

const TIME_OPTIONS = [
  'Morning (6 AM - 12 PM)',
  'Afternoon (12 PM - 5 PM)',
  'Evening (5 PM - 9 PM)',
  'Night (9 PM - 6 AM)',
  'Uncertain / Throughout Day',
];

export const DateTimeStep: React.FC<DateTimeStepProps> = ({
  date,
  approxTime,
  onChange,
  errors = {},
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Date & Time
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          When was the item lost or found? An approximate window helps narrow down matching reports.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-violet-400" />
            <span>Date <span className="text-rose-400">*</span></span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => onChange('date', e.target.value)}
            className={`w-full px-4 py-3 bg-[#0B0F1B] border rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 cursor-pointer ${
              errors.date ? 'border-rose-500' : 'border-indigo-900/60'
            }`}
          />
          {errors.date && (
            <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.date}</span>
            </span>
          )}
        </div>

        {/* Time Window Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Approximate Time Window</span>
          </label>
          <select
            value={approxTime}
            onChange={(e) => onChange('approxTime', e.target.value)}
            className="w-full px-4 py-3 bg-[#0B0F1B] border border-indigo-900/60 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 cursor-pointer"
          >
            {TIME_OPTIONS.map((timeOpt) => (
              <option key={timeOpt} value={timeOpt} className="bg-[#0B0F1B] text-white">
                {timeOpt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
