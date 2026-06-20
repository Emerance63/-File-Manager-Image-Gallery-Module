import React from "react";
import { useFiles } from "../context/FileContext";
import FileCard from "../components/FileCard";
import { FaPlus } from "react-icons/fa";

export default function FilesView({ typeFilter }) {
  const { state, dispatch } = useFiles();

  // Helper to format filter names
  const getFilterInfo = () => {
    switch (typeFilter) {
      case "image":
        return { title: "Images", buttonLabel: "Add Image", typeName: "image" };
      case "video":
        return { title: "Videos", buttonLabel: "Add Video", typeName: "video" };
      case "document":
        return { title: "Document", buttonLabel: "Add Document", typeName: "document" };
      default:
        return { title: "All-Files", buttonLabel: "Add Files", typeName: "file" };
    }
  };

  const { title, buttonLabel } = getFilterInfo();

  // Filter files by type (excluding trash) and search query
  const filteredFiles = state.files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || file.type === typeFilter;
    return matchesSearch && matchesType && !file.isTrash;
  });

  const handleAddFile = () => {
    const defaultName =
      typeFilter === "image"
        ? `Gallery-${Math.floor(Math.random() * 1000000000)}.jpg`
        : typeFilter === "video"
        ? `Video-${Math.floor(Math.random() * 1000000000)}.mp4`
        : typeFilter === "document"
        ? `Doc-${Math.floor(Math.random() * 100000000)}.pdf`
        : `Doc-${Math.floor(Math.random() * 100000000)}.pdf`;

    const fileName = prompt(`Enter ${typeFilter !== "all" ? typeFilter : "file"} name:`, defaultName);
    if (fileName === null) return; // cancelled

    const fileType =
      typeFilter !== "all"
        ? typeFilter
        : fileName.toLowerCase().endsWith(".mp4") ||
          fileName.toLowerCase().endsWith(".mkv")
        ? "video"
        : fileName.toLowerCase().endsWith(".jpg") ||
          fileName.toLowerCase().endsWith(".jpeg") ||
          fileName.toLowerCase().endsWith(".png")
        ? "image"
        : "document";

    const newFile = {
      id: `file-${Date.now()}`,
      name: fileName,
      type: fileType,
      size:
        fileType === "document"
          ? `${Math.floor(Math.random() * 15) + 1}mb`
          : undefined,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      lastOpened: "just now",
      isTrash: false,
      thumbnail:
        fileType !== "document"
          ? `https://picsum.photos/400/260?random=${Math.floor(
              Math.random() * 100
            )}`
          : undefined,
    };

    dispatch({ type: "ADD_FILE", payload: newFile });
  };

  const handleAction = (action, fileId) => {
    if (action === "trash") {
      dispatch({ type: "MOVE_TO_TRASH", payload: fileId });
    }
  };

  // Grouping logic for "All-Files" view
  const documents = filteredFiles.filter((f) => f.type === "document");
  const images = filteredFiles.filter((f) => f.type === "image");
  const videos = filteredFiles.filter((f) => f.type === "video");

  return (
    <div className="flex flex-col gap-6">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h1>
        <button
          onClick={handleAddFile}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm shadow-blue-200 transition-all cursor-pointer"
        >
          <FaPlus className="w-3.5 h-3.5" />
          <span>{buttonLabel}</span>
        </button>
      </div>

      {filteredFiles.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm">
          <p className="text-gray-400 text-sm font-medium">No matching files found.</p>
        </div>
      ) : typeFilter === "all" ? (
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
                Images
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
      ) : (
        /* Single grid for filtered views (Image, Video, Document) */
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-700 border-b border-gray-100 pb-2">
            Recently viewed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFiles.map((file) => (
              <FileCard key={file.id} file={file} onAction={handleAction} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
