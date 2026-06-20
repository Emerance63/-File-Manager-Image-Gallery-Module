import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="text-gray-700 min-h-screen flex flex-col bg-[#f8f9fa]">
      
      <Topbar />
      
      <div className="flex flex-1">
        
        <Sidebar />

        <main className="flex-1 lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>

      
      <Footer />
    </div>
  );
}