import React from "react";
import { FaRegUser, FaFolder, FaTrash } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/80"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold">Elon musk</div>
          <div className="text-xs text-gray-500">@musk</div>
        </div>
      </div>

      <nav className="flex-1">
        <div className="text-xs text-gray-700 uppercase mb-2 border-b border-gray-200 pb-2">File Manager</div>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-500"
            >
              <FaFolder /> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 text-gray-700"
            >
              <FaFolder /> <span>Image</span>
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

      <div className="mt-4 text-sm text-gray-500">Other</div>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Sign Out
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Help
          </a>
        </li>
      </ul>
    </aside>
  );
}
