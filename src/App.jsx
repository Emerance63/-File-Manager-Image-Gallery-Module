import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import FilesView from "./pages/FilesView";
import TrashView from "./pages/TrashView";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/file-manager/dashboard" replace />}
      />

      <Route path="/file-manager" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="images" element={<FilesView typeFilter="image" />} />
        <Route path="videos" element={<FilesView typeFilter="video" />} />
        <Route path="documents" element={<FilesView typeFilter="document" />} />
        <Route path="all-files" element={<FilesView typeFilter="all" />} />
        <Route path="trash" element={<TrashView />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/file-manager/dashboard" replace />}
      />
    </Routes>
  );
}
