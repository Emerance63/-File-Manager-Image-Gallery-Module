import React, { createContext, useContext, useState } from "react";

const FileContext = createContext(null);

export function FileProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FileContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(FileContext);
  if (!context) throw new Error("useFiles must be used within a FileProvider");
  return context;
}

export default FileContext;
