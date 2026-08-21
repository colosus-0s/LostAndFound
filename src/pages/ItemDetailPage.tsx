import React from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-white">Item Details</h1>
      <p className="text-slate-400 mt-2">Item ID: {id}</p>
    </div>
  );
};
