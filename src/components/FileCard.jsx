import React, { useState } from "react";
import { 
  FaFilePdf, 
  FaFileWord, 
  FaFileExcel, 
  FaFilePowerpoint, 
  FaFileAlt, 
  FaEllipsisV, 
  FaTrash, 
  FaUndo,
  FaFileImage,
  FaFileVideo
} from "react-icons/fa";

export default function FileCard({ file, onAction }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to get file icon and color style based on file name extension or type
  const getFileIconInfo = () => {
    if (file.type === "image") {
      return {
        icon: <FaFileImage className="text-blue-500" />,
        bg: "bg-blue-50",
        color: "text-blue-600"
      };
    }
    if (file.type === "video") {
      return {
        icon: <FaFileVideo className="text-indigo-500" />,
        bg: "bg-indigo-50",
        color: "text-indigo-600"
      };
    }

    const name = file.name.toLowerCase();
    if (name.endsWith(".pdf")) {
      return {
        icon: <FaFilePdf className="text-red-500 w-12 h-12" />,
        bg: "bg-red-50",
        color: "text-red-600"
      };
    }
    if (name.endsWith(".xls") || name.endsWith(".xlsx")) {
      return {
        icon: <FaFileExcel className="text-emerald-500 w-12 h-12" />,
        bg: "bg-emerald-50",
        color: "text-emerald-600"
      };
    }
    if (name.endsWith(".doc") || name.endsWith(".docx")) {
      return {
        icon: <FaFileWord className="text-blue-500 w-12 h-12" />,
        bg: "bg-blue-50",
        color: "text-blue-600"
      };
    }
    if (name.endsWith(".ppt") || name.endsWith(".pptx")) {
      return {
        icon: <FaFilePowerpoint className="text-orange-500 w-12 h-12" />,
        bg: "bg-orange-50",
        color: "text-orange-600"
      };
    }

    return {
      icon: <FaFileAlt className="text-gray-500 w-12 h-12" />,
      bg: "bg-gray-50",
      color: "text-gray-600"
    };
  };

  const { icon, bg, color } = getFileIconInfo();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden relative flex flex-col h-full group">
      {/* File Preview/Icon Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100">
        {file.type === "image" || file.type === "video" ? (
          <>
            <img
              src={file.thumbnail}
              alt={file.name}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
            {file.type === "video" && (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-indigo-600 hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${bg}`}>
            {icon}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
            Created on {file.createdAt}
          </div>
          
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {/* Inline small file icon */}
              {file.type === "image" ? (
                <span className="p-1 rounded bg-blue-50 text-blue-500 text-xs shrink-0">
                  <FaFileImage />
                </span>
              ) : file.type === "video" ? (
                <span className="p-1 rounded bg-indigo-50 text-indigo-500 text-xs shrink-0">
                  <FaFileVideo />
                </span>
              ) : (
                <span className={`p-1 rounded ${bg} text-xs shrink-0`}>
                  {React.cloneElement(icon, { className: "w-3.5 h-3.5" })}
                </span>
              )}
              
              <h3 className="text-sm font-semibold text-gray-700 truncate" title={file.name}>
                {file.name}
              </h3>
            </div>

            {file.size && (
              <span className="text-xs text-blue-500 font-semibold bg-blue-50/50 px-1.5 py-0.5 rounded-md shrink-0">
                {file.size}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
          <span className="text-xs text-gray-400">
            You opened <span className="text-blue-500 font-medium">{file.lastOpened}</span>
          </span>

          {/* Action Trigger */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors cursor-pointer"
            >
              <FaEllipsisV className="w-3.5 h-3.5" />
            </button>

            {menuOpen && (
              <>
                {/* Backdrop to close menu */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setMenuOpen(false)}
                />
                
                <div className="absolute right-0 bottom-full mb-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[140px] z-20 animate-in fade-in slide-in-from-bottom-2 duration-100">
                  {file.isTrash ? (
                    <button
                      onClick={() => {
                        onAction("restore", file.id);
                        setMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 text-left cursor-pointer"
                    >
                      <FaUndo className="w-3 h-3 text-gray-400" />
                      Restore
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onAction("trash", file.id);
                        setMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 text-left cursor-pointer"
                    >
                      <FaTrash className="w-3 h-3 text-red-400" />
                      Move to Trash
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
