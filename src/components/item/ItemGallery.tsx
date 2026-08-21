import React, { useState } from 'react';

interface ItemGalleryProps {
  mainImageUrl: string;
  name: string;
  status: 'LOST' | 'FOUND' | 'RECOVERED';
  matchConfidence?: number;
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({ mainImageUrl, name, status, matchConfidence }) => {
  const [selectedImage, setSelectedImage] = useState(mainImageUrl);

  // Additional mock thumbnails for gallery demonstration
  const galleryImages = [
    mainImageUrl,
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
  ];

  const isLost = status === 'LOST';

  return (
    <div className="w-full space-y-4">
      {/* Main Image Viewport */}
      <div className="relative w-full h-80 sm:h-96 md:h-[420px] bg-[#04060A] border border-indigo-950/80 rounded-2xl overflow-hidden shadow-xl">
        <img src={selectedImage} alt={name} className="w-full h-full object-cover transition-all duration-300" />
        
        {/* Status Badge Overlay */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-extrabold tracking-widest uppercase shadow-md ${
              isLost
                ? 'bg-rose-950/90 border border-rose-500/50 text-rose-300'
                : 'bg-cyan-950/90 border border-cyan-500/50 text-cyan-300'
            }`}
          >
            {status}
          </span>
        </div>

        {/* Match Confidence Overlay */}
        {matchConfidence && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-lg bg-violet-950/90 border border-violet-500/50 text-violet-300 text-xs font-extrabold shadow-md">
              {matchConfidence}% Match
            </span>
          </div>
        )}
      </div>

      {/* Gallery Thumbnails */}
      <div className="flex items-center gap-3">
        {galleryImages.map((imgUrl, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(imgUrl)}
            className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
              selectedImage === imgUrl ? 'border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'border-indigo-950/60 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={imgUrl} alt={`${name} thumb ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
