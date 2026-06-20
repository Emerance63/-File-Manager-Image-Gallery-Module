import React, { useState } from "react";

export default function NavDropdown({ label, icon, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="hover:text-blue-600 flex items-center gap-2 text-gray-500 font-medium text-sm transition-colors duration-150 focus:outline-none cursor-pointer"
      >
        <span className="text-gray-400">{icon}</span>
        <span>{label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[200px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-0.5 px-2">
            {items.map((item, index) => (
              <DropdownItem key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item }) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  if (item.submenu) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsSubOpen(true)}
        onMouseLeave={() => setIsSubOpen(false)}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSubOpen(!isSubOpen);
          }}
          className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 rounded-lg text-left font-medium cursor-pointer"
        >
          <span>{item.label}</span>
          <span className="text-gray-400 text-xs font-semibold select-none">❯</span>
        </button>

        {isSubOpen && (
          <div className="absolute left-full top-0 ml-1 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[180px] z-50 animate-in fade-in slide-in-from-left-2 duration-150">
            <div className="flex flex-col gap-0.5 px-2">
              {item.submenu.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.link || "#"}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 rounded-lg font-medium"
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.link || "#"}
      className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 rounded-lg font-medium"
    >
      {item.label}
    </a>
  );
}
