import React from "react";

const sample = [
  "https://picsum.photos/400/260?1",
  "https://picsum.photos/400/260?2",
  "https://picsum.photos/400/260?3",
  "https://picsum.photos/400/260?4",
  "https://picsum.photos/400/260?5",
  "https://picsum.photos/400/260?6",
  "https://picsum.photos/400/260?7",
  "https://picsum.photos/400/260?8",
];

export default function FilesView({ typeFilter }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Images</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sample.map((src, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <div className="text-sm font-medium">Gallery-{1000 + i}</div>
              <div className="text-xs text-gray-500 mt-1">
                You opened {i} ago
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
