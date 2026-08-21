import React from 'react';
import { ImagePlus, X, Sparkles } from 'lucide-react';

interface PhotoUploadStepProps {
  photos: string[];
  onAddPhoto: (photoUrl: string) => void;
  onRemovePhoto: (index: number) => void;
}

export const PhotoUploadStep: React.FC<PhotoUploadStepProps> = ({ photos, onAddPhoto, onRemovePhoto }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onAddPhoto(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Item Photos
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Add clear photos of the item if available. Photos make matching significantly easier.
        </p>
      </div>

      {/* Tip Banner */}
      <div className="flex items-center gap-2 p-3.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-semibold">
        <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
        <span>Tip: Distinct features, scratches, or custom stickers help verify ownership quickly.</span>
      </div>

      {/* Photo Previews Grid & Upload Trigger */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((photoUrl, idx) => (
          <div key={idx} className="relative w-full h-36 rounded-2xl overflow-hidden border border-indigo-950/80 bg-[#04060A] group">
            <img src={photoUrl} alt={`Upload preview ${idx + 1}`} className="w-full h-full object-cover" />
            <button
              onClick={() => onRemovePhoto(idx)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-rose-950/90 border border-rose-500/50 text-rose-300 hover:bg-rose-900 transition-colors"
              title="Remove photo"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}

        {/* Add Photo Button */}
        {photos.length < 4 && (
          <label className="w-full h-36 rounded-2xl border-2 border-dashed border-indigo-900/60 hover:border-violet-500/60 bg-[#0B0F1B]/60 hover:bg-[#0B0F1B] flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all">
            <ImagePlus className="w-6 h-6 text-violet-400" />
            <span className="text-xs font-bold text-slate-300">Add Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {photos.length === 0 && (
        <p className="text-slate-400 text-xs text-center font-medium">
          No photos added yet. You can continue without photos if you don't have one right now.
        </p>
      )}
    </div>
  );
};
