import React from "react";
import { useFiles } from "../context/FileContext";
import FileCard from "../components/FileCard";
import { FaUndo } from "react-icons/fa";

export default function TrashView() {
  const { state, dispatch } = useFiles();

  const filteredTrash = state.files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase());
    return matchesSearch && file.isTrash;
  });

  const handleAction = (action, fileId) => {
    if (action === "restore") {
      dispatch({ type: "RESTORE_FILE", payload: fileId });
    }
  };

  const handleRestoreAll = () => {
    if (window.confirm("Are you sure you want to restore all items?")) {
      dispatch({ type: "RESTORE_ALL" });
    }
  };

  const documents = filteredTrash.filter((f) => f.type === "document");
  const images = filteredTrash.filter((f) => f.type === "image");
  const videos = filteredTrash.filter((f) => f.type === "video");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Trash</h1>
        {filteredTrash.length > 0 && (
          <button
            onClick={handleRestoreAll}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm shadow-blue-200 transition-all cursor-pointer"
          >
            <FaUndo className="w-3.5 h-3.5" />
            <span>Restore All</span>
          </button>
        )}
      </div>

      {filteredTrash.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm">
          <p className="text-gray-400 text-sm font-medium">Trash is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Documents Section */}
          {documents.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-gray-700 border-b border-gray-100 pb-2">
                Documents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {documents.map((file) => (
                  <FileCard key={file.id} file={file} onAction={handleAction} />
                ))}
              </div>
            </div>
          )}

          {/* Images Section */}
          {images.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-gray-700 border-b border-gray-100 pb-2">
                Image
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((file) => (
                  <FileCard key={file.id} file={file} onAction={handleAction} />
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {videos.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-gray-700 border-b border-gray-100 pb-2">
                Videos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((file) => (
                  <FileCard key={file.id} file={file} onAction={handleAction} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
