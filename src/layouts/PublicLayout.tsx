import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111318] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
