import React from "react";
import { FaTrash, FaVideo, FaImage, FaFile, FaDashcube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignOutThin } from "react-icons/pi";
import { MdHelp } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosHeartHalf } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-150 font-medium ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    }`;

  return (
    <aside className="hidden lg:flex flex-col bg-white border-r border-gray-200 p-6 fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] overflow-y-auto pb-20">
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white">
          <img
            src="https://i.pravatar.cc/80"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-lg">
          <div className="font-semibold">Elon musk</div>
          <div className="text-md text-blue-600">@musk</div>

        </div>
        <div className="flex gap-3 ">
        <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
           <FaShoppingCart/> 
        </div>
        
        <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
            < IoIosHeartHalf />
        </div>
        
           
        <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
          <IoNotifications />  
        </div>
        </div>
       
      </div>

      <nav className="">
    <div className="text-xs text-gray-700 uppercase mb-2 border-t border-gray-200 pb-2 tracking-[0.3em] font-semibold py-3 px-3">File Manager</div>
        <ul className="space-y-2">
       
          <li>
            <NavLink to="/file-manager/dashboard" className={linkClass}>
              <FaDashcube /> <span>Dashboard</span>
            </NavLink>
          </li>

          <div className="flex items-center gap-3 tracking-[0.1em] text-xs font-bold text-gray-400 uppercase pt-3 pb-1 px-3">
            <span>PAGES</span>
          </div>

          <li>
            <NavLink to="/file-manager/images" className={linkClass}>
              <FaImage /> <span>Image</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/file-manager/videos" className={linkClass}>
              <FaVideo /> <span>Video</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/file-manager/all-files" className={linkClass}>
              <FaFile /> <span>All Files</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/file-manager/trash" className={linkClass}>
              <FaTrash /> <span>Trash</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-4 text-sm text-gray-500 tracking-[0.2em] py-3 border-t border-gray-200">OTHER</div>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex gap-4 items-center py-2 px-3 ">
           <PiSignOutThin className=""/> <span>Sign Out</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex gap-4 items-center py-2 px-3">
            <MdHelp className="text-gray-400"/> <span>Help</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
