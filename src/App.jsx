import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
;

export default function App() {
  return (
    <Routes>
      {/* Root Fallback Redirection */}
      <Route path="/" element={<Navigate to="/file-manager/dashboard" replace />} />
      <Route path="/file-manager" element={<Navigate to="/file-manager/dashboard" replace />} />
      
      {/* Parent Application Layout Wrapper Route */}
      <Route path="/file-manager" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="images" element={<FilesView typeFilter="image" />} />
        <Route path="videos" element={<FilesView typeFilter="video" />} />
        <Route path="documents" element={<FilesView typeFilter="document" />} />
        <Route path="all-files" element={<FilesView typeFilter="all" />} />
        <Route path="trash" element={<TrashView />} />
      </Route>

      {/* Wildcard 404 Error Catchall Route */}
      <Route path="*" element={<Navigate to="/file-manager/dashboard" replace />} />
    </Routes>
  );
}
