import React, { createContext, useContext, useReducer } from "react";
import { imageData } from "../assets/Data/imageData";
import { videoData } from "../assets/Data/videoData";

const FileContext = createContext(null);

const initialFiles = [
  ...imageData,
  ...videoData,

  // Documents
  {
    id: "doc-1",
    name: "Doc-123472578.pdf",
    type: "document",
    size: "5mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "just now",
    isTrash: false,
  },
  {
    id: "doc-2",
    name: "Doc-25783.xlsx",
    type: "document",
    size: "2mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 day ago",
    isTrash: false,
  },
  {
    id: "doc-3",
    name: "abc-25783.doc",
    type: "document",
    size: "7mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "a month ago",
    isTrash: false,
  },
  {
    id: "doc-4",
    name: "xyz-25783.pptx",
    type: "document",
    size: "12mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 day ago",
    isTrash: false,
  },
  {
    id: "doc-5",
    name: "abd-25783.doc",
    type: "document",
    size: "10mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "a month ago",
    isTrash: false,
  },
  {
    id: "doc-6",
    name: "abc-123472578.pptx",
    type: "document",
    size: "58kb",
    createdAt: "Dec 13, 2020",
    lastOpened: "just now",
    isTrash: false,
  },
  {
    id: "doc-7",
    name: "list-25783.xlsx",
    type: "document",
    size: "2mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 day ago",
    isTrash: false,
  },
  {
    id: "doc-8",
    name: "Themes-123472578.pdf",
    type: "document",
    size: "15mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "just now",
    isTrash: false,
  },

  // Trash Items (Initially deleted items matching Screenshot 5)
  {
    id: "trash-doc-1",
    name: "Doc-123472578.pdf",
    type: "document",
    size: "5mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "just now",
    isTrash: true,
  },
  {
    id: "trash-doc-2",
    name: "Doc-25783.pptx",
    type: "document",
    size: "2mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 day ago",
    isTrash: true,
  },
  {
    id: "trash-doc-3",
    name: "abc-25783.doc",
    type: "document",
    size: "7mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "a month ago",
    isTrash: true,
  },
  {
    id: "trash-doc-4",
    name: "xyz-25783.xlsx",
    type: "document",
    size: "12mb",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 day ago",
    isTrash: true,
  },
  {
    id: "trash-img-1",
    name: "Gallery-trash1.jpg",
    type: "image",
    createdAt: "Dec 13, 2020",
    lastOpened: "a week ago",
    isTrash: true,
    thumbnail: "/hero.png",
  },
  {
    id: "trash-img-2",
    name: "Gallery-trash2.jpg",
    type: "image",
    createdAt: "Dec 13, 2020",
    lastOpened: "2 days ago",
    isTrash: true,
    thumbnail: "/hero.png",
  }
];

const initialState = {
  files: initialFiles,
  searchQuery: "",
};

function fileReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "ADD_FILE":
      return {
        ...state,
        files: [action.payload, ...state.files],
      };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        files: state.files.map((file) =>
          file.id === action.payload ? { ...file, isTrash: true } : file
        ),
      };
    case "RESTORE_FILE":
      return {
        ...state,
        files: state.files.map((file) =>
          file.id === action.payload ? { ...file, isTrash: false } : file
        ),
      };
    case "RESTORE_ALL":
      return {
        ...state,
        files: state.files.map((file) =>
          file.isTrash ? { ...file, isTrash: false } : file
        ),
      };
    default:
      return state;
  }
}

export function FileProvider({ children }) {
  const [state, dispatch] = useReducer(fileReducer, initialState);

  return (
    <FileContext.Provider
      value={{
        state,
        dispatch,
        searchQuery: state.searchQuery,
        setSearchQuery: (query) =>
          dispatch({ type: "SET_SEARCH_QUERY", payload: query }),
      }}
    >
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
