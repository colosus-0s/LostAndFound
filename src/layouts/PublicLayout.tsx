import React from 'react';
import { Navbar, Footer } from '../components/navigation';

export interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-gray-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};
