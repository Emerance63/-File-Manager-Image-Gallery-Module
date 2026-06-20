import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
  {/* Topbar */}
  <Topbar />

  {/* Sidebar + Content */}
  <div className="flex flex-1">
    <Sidebar />

    <main className="flex-1 p-6 lg:p-8 bg-gray-50">
      <Outlet />
    </main>
  </div>

  <Footer />
</div>
    )}