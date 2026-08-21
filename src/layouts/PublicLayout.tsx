import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#04060A] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
