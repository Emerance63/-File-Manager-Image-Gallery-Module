import React from "react";
import { FaRegUser, FaFolder, FaTrash, FaVideo, FaImage, FaFile, FaDashcube, FaBookmark, FaFileArchive } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignOutThin } from "react-icons/pi";
import { MdHelp } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosHeartHalf } from "react-icons/io";
export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="w-17 h-17 rounded-xl overflow-hidden bg-white">
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

      <nav className="flex-1">
    <div className="text-xs text-gray-700 uppercase mb-2 border-t border-gray-200 pb-2 tracking-[0.3em] font-semibold py-3 px-3">File Manager</div>
        <ul className="space-y-2">
       
       <div className="flex items-center border-b border-gray-200 gap-3 py-4 px-3 rounded hover:bg-gray-50 text-gray-500">

        <FaDashcube /> <span>Dashboard</span>
        
       </div>

       <div className="flex items-center gap-3  tracking-[0.1em] ">
            <span>PAGES</span>
        </div>

          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-500"
            >
              <FaImage /> <span>Image</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-700"
            >
              <FaVideo /> <span>Video</span>
            </a>
          </li>
           <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-700"
            >
              <FaFile /> <span>All Files</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-700"
            >
              <FaTrash /> <span>Trash</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-4 text-sm text-gray-500 tracking-[0.2em] py-3 border-t border-gray-200">OTHER</div>
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
