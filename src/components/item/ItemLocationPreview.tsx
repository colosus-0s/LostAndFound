import React from 'react';
import { MapPin, Calendar, ShieldCheck } from 'lucide-react';

interface ItemLocationPreviewProps {
  location: string;
  date: string;
}

export const ItemLocationPreview: React.FC<ItemLocationPreviewProps> = ({ location, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-subtle">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span>LOCATION & TIMELINE</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 block">Reported Area Zone</span>
            <span className="text-base font-extrabold text-[#111318]">{location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 block">Date Reported</span>
            <span className="text-base font-extrabold text-[#111318]">{date}</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <span>Exact storage room or desk location is withheld until ownership verification is complete.</span>
      </div>
    </div>
  );
};
