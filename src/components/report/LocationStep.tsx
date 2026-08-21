import React from 'react';
import { MapPin, Building2, AlertCircle } from 'lucide-react';

interface LocationStepProps {
  locationArea: string;
  specificPlace: string;
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

const LOCATION_AREAS = [
  'Library',
  'Student Center',
  'Science Lab',
  'Gymnasium',
  'Main Gate',
  'Engineering Block',
  'Cafeteria',
  'North Parking Lot',
  'Other',
];

export const LocationStep: React.FC<LocationStepProps> = ({
  locationArea,
  specificPlace,
  onChange,
  errors = {},
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Reported Location
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Where was the item lost or found? Public locations remain approximate for security.
        </p>
      </div>

      {/* Location Area Selection */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-violet-400" />
          <span>Campus Area / Building <span className="text-rose-400">*</span></span>
        </label>
        <select
          value={locationArea}
          onChange={(e) => onChange('locationArea', e.target.value)}
          className={`w-full px-4 py-3 bg-[#0B0F1B] border rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 cursor-pointer ${
            errors.locationArea ? 'border-rose-500' : 'border-indigo-900/60'
          }`}
        >
          <option value="" className="text-slate-400">Select campus area...</option>
          {LOCATION_AREAS.map((loc) => (
            <option key={loc} value={loc} className="bg-[#0B0F1B] text-white">
              {loc}
            </option>
          ))}
        </select>
        {errors.locationArea && (
          <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.locationArea}</span>
          </span>
        )}
      </div>

      {/* Specific Place */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Specific Zone / Room (Optional)</span>
        </label>
        <input
          type="text"
          value={specificPlace}
          onChange={(e) => onChange('specificPlace', e.target.value)}
          placeholder="e.g. Study Area 2nd Floor, Room 304, Near Booth 4"
          className="w-full px-4 py-3 bg-[#0B0F1B] border border-indigo-900/60 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-violet-500"
        />
        <p className="text-[#8890A6] text-xs">
          Room numbers or workstation details are shown as approximate zone names to preserve privacy.
        </p>
      </div>
    </div>
  );
};
