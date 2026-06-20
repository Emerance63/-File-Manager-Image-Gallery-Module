import React from "react";
import { BiSearch, BiBell, BiCartAlt, BiMenu } from "react-icons/bi";
import { FaHome, FaRegCopy, FaThLarge, FaLayerGroup } from "react-icons/fa";
import { useFiles } from "../context/FileContext";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineExpandAlt } from "react-icons/ai";

export default function Topbar() {
  const { searchQuery, setSearchQuery } = useFiles();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 font-bold text-xl text-black">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2">
            <FaLayerGroup className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold mr-30">Hope UI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-blue-600 flex items-center gap-2">
            <FaRegCopy className="text-gray-400" /> <span>Image</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center gap-2">
            <FaHome className="text-gray-400" /> <span>Home</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center gap-2">
            <FaThLarge className="text-gray-400" /> <span>Pages</span>
          </a>
                 <a href="#" className="hover:text-gray-700 flex items-center gap-2">
            <FaThLarge className="text-gray-400" /> <span>Elements</span>
          </a>
        </nav>
      </div>

    
<div className="flex items-center gap-4 w-1/3 max-w-xl justify-end">

       <div className="text-xs text-gray-500 px-1">A</div>
        <div className="bg-blue-600 text-white rounded-md px-2 py-1">A</div>
         <div className="text-gray-700 text-2xl rounded-md px-2 py-1">A</div>

        <div className="flex items-center gap-3 bg-gray-30 border border-gray-300 rounded-lg px-3 py-1.5 w-80">
          <BiSearch className="w-3 h-7 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </div>
        <div>

          <div className="flex gap-3 ">
                  <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
                     <FaShoppingCart/> 
                  </div>

           <div className="flex gap-3 ">
                  <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
                     <IoPerson /> 
                  </div>

            <div className="flex gap-3 ">
                  <div className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1">
                     <AiOutlineExpandAlt /> 
            </div>      </div>

          </div>
        </div>
        </div>
          
        
</div>
    </header>
  );
}
