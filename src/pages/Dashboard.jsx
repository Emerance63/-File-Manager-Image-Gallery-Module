import React from "react";
import { useFiles } from "../context/FileContext";
import { FaImage, FaVideo, FaFileAlt, FaTrash } from "react-icons/fa";

export default function Dashboard() {
  const { state } = useFiles();

  // Filter active files
  const activeFiles = state.files.filter((f) => !f.isTrash);
  const trashedFiles = state.files.filter((f) => f.isTrash);

  // Group active files
  const images = activeFiles.filter((f) => f.type === "image");
  const videos = activeFiles.filter((f) => f.type === "video");
  const documents = activeFiles.filter((f) => f.type === "document");

  // Calculate size approximations
  const parseSize = (sizeStr) => {
    if (!sizeStr) return 0;
    const match = sizeStr.match(/(\d+)(kb|mb|gb)?/i);
    if (!match) return 0;
    const num = parseFloat(match[1]);
    const unit = match[2]?.toLowerCase();
    if (unit === "kb") return num / 1024;
    if (unit === "gb") return num * 1024;
    return num; // mb default
  };

  const documentSize = documents.reduce((sum, f) => sum + parseSize(f.size), 0);
  const imageSize = images.length * 2.4; // Average 2.4MB per image
  const videoSize = videos.length * 35; // Average 35MB per video

  const totalUsedSize = documentSize + imageSize + videoSize;
  const totalCapacity = 1000; // 1GB in MB
  const usedPercentage = Math.min((totalUsedSize / totalCapacity) * 100, 100).toFixed(1);

  // Recent files (active, sorted or just first few)
  const recentFiles = activeFiles.slice(0, 16);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome to your file manager console. Manage and browse your files.
        </p>
      </div>

      {/* Grid of counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Images */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Images</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mt-1">{images.length}</h3>
            <p className="text-xs text-blue-500 font-medium mt-1">~{imageSize.toFixed(1)} MB</p>
          </div>
          <div className="bg-blue-50 text-blue-600 rounded-xl p-3.5">
            <FaImage className="w-6 h-6" />
          </div>
        </div>

        {/* Videos */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Videos</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mt-1">{videos.length}</h3>
            <p className="text-xs text-indigo-500 font-medium mt-1">~{videoSize.toFixed(1)} MB</p>
          </div>
          <div className="bg-indigo-50 text-indigo-600 rounded-xl p-3.5">
            <FaVideo className="w-6 h-6" />
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Documents</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mt-1">{documents.length}</h3>
            <p className="text-xs text-emerald-500 font-medium mt-1">~{documentSize.toFixed(1)} MB</p>
          </div>
          <div className="bg-emerald-50 text-emerald-600 rounded-xl p-3.5">
            <FaFileAlt className="w-6 h-6" />
          </div>
        </div>

        {/* Trash */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Trash</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mt-1">{trashedFiles.length}</h3>
            <p className="text-xs text-red-500 font-medium mt-1">Items deleted</p>
          </div>
          <div className="bg-red-50 text-red-600 rounded-xl p-3.5">
            <FaTrash className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Storage breakdown panel */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Storage Capacity</h2>
            <p className="text-xs text-gray-400">Total visual breakdown of categories</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-gray-700">
              {totalUsedSize.toFixed(1)} MB
            </span>
            <span className="text-xs text-gray-400"> / {totalCapacity} MB ({usedPercentage}%)</span>
          </div>
        </div>

        {/* Stacked Progress Bar */}
        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden flex">
          <div
            style={{ width: `${(imageSize / totalCapacity) * 100}%` }}
            className="bg-blue-500 h-full transition-all duration-300"
            title={`Images: ${imageSize.toFixed(1)} MB`}
          />
          <div
            style={{ width: `${(videoSize / totalCapacity) * 100}%` }}
            className="bg-indigo-500 h-full transition-all duration-300"
            title={`Videos: ${videoSize.toFixed(1)} MB`}
          />
          <div
            style={{ width: `${(documentSize / totalCapacity) * 100}%` }}
            className="bg-emerald-500 h-full transition-all duration-300"
            title={`Documents: ${documentSize.toFixed(1)} MB`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
            <span className="text-gray-500 font-semibold">Images</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
            <span className="text-gray-500 font-semibold">Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="text-gray-500 font-semibold">Documents</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="w-3 h-3 rounded-full bg-gray-100 inline-block" />
            <span className="text-gray-400 font-semibold">Free Space</span>
          </div>
        </div>
      </div>

      {/* Recent activity list */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-800">Recently Opened Files</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <th className="pb-3 pl-2">Name</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Last Active</th>
                <th className="pb-3 text-right pr-2">Size</th>
              </tr>
            </thead>
            <tbody>
              {recentFiles.map((file) => (
                <tr key={file.id} className="border-b border-gray-50 text-sm hover:bg-gray-50/55 transition-colors">
                  <td className="py-3 pl-2 font-semibold text-gray-700">{file.name}</td>
                  <td className="py-3 text-gray-500 capitalize">{file.type}</td>
                  <td className="py-3 text-gray-500">{file.lastOpened}</td>
                  <td className="py-3 text-right pr-2 font-bold text-blue-500">{file.size || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
