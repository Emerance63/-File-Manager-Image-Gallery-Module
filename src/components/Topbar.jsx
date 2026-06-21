import React, { useState } from "react";
import { BiSearch, BiBell, BiCartAlt, BiMenu } from "react-icons/bi";
import { FaHome, FaRegCopy, FaThLarge, FaLayerGroup } from "react-icons/fa";
import { useFiles } from "../context/FileContext";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { GrLinkPrevious } from "react-icons/gr";
import NavDropdown from "./NavDropdown";

const homeItems = [
  { label: "Dashboard", link: "/file-manager/dashboard" },
  { label: "Alternate Dashboard", link: "#" },
  {
    label: "Menu Style",
    submenu: [
      { label: "Horizontal Menu", link: "#" },
      { label: "Dual Compact", link: "#" },
      { label: "Boxed Menu", link: "#" },
    ],
  },
  { label: "E-Commerce", link: "#" },
  { label: "Social App", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Appointment", link: "#" },
  { label: "File Manager", link: "/file-manager/all-files" },
  { label: "Chat", link: "#" },
  { label: "Mail", link: "#" },
];

const pagesItems = [
  {
    label: "Special Pages",
    submenu: [
      { label: "Sign In", link: "#" },
      { label: "Sign Up", link: "#" },
      { label: "Error 404", link: "#" },
      { label: "Error 500", link: "#" },
    ],
  },
  {
    label: "Auth Skins",
    submenu: [
      { label: "Skin 1", link: "#" },
      { label: "Skin 2", link: "#" },
    ],
  },
  {
    label: "User",
    submenu: [
      { label: "Profile", link: "#" },
      { label: "Edit Profile", link: "#" },
      { label: "User List", link: "#" },
    ],
  },
  {
    label: "Utilities",
    submenu: [
      { label: "Colors", link: "#" },
      { label: "Typography", link: "#" },
    ],
  },
  {
    label: "Plugins",
    submenu: [
      { label: "Charts", link: "#" },
      { label: "Vector Map", link: "#" },
    ],
  },
];

const elementsItems = [
  { label: "Components", link: "#" },
  { label: "UI Color", link: "#" },
  {
    label: "Widgets",
    submenu: [
      { label: "Chart Widgets", link: "#" },
      { label: "List Widgets", link: "#" },
      { label: "Card Widgets", link: "#" },
    ],
  },
  {
    label: "Map",
    submenu: [
      { label: "Google Map", link: "#" },
      { label: "Vector Map", link: "#" },
    ],
  },
  {
    label: "Form",
    submenu: [
      { label: "Form Elements", link: "#" },
      { label: "Form Layouts", link: "#" },
      { label: "Form Wizard", link: "#" },
    ],
  },
  {
    label: "Table",
    submenu: [
      { label: "Basic Tables", link: "#" },
      { label: "Data Tables", link: "#" },
    ],
  },
  {
    label: "Icons",
    submenu: [
      { label: "Font Awesome", link: "#" },
      { label: "React Icons", link: "#" },
      { label: "Heroicons", link: "#" },
    ],
  },
];

export default function Topbar() {
  const [personOpen, setPersonOpen] = useState(false);
  const personItems = [
    { label: "Profile", link: "/profile" },
    { label: "Settings", link: "/settings" },
    { label: "Logout", link: "/logout" },
  ];
  const { searchQuery, setSearchQuery } = useFiles();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 font-bold text-xl text-black">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2">
            <FaLayerGroup className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold mr-30">Hope UI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-blue-600 flex items-center gap-2">
            <GrLinkPrevious className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1" /> <span>Image</span>
          </a>
          <NavDropdown label="Home" icon={<FaHome />} items={homeItems} />
          <NavDropdown label="Pages" icon={<FaThLarge />} items={pagesItems} />
          <NavDropdown label="Elements" icon={<FaThLarge />} items={elementsItems} />
        </nav>
      </div>

      <div className="flex items-center gap-3 bg-gray-30 border border-gray-300 rounded-lg px-3 py-1.5 w-80">
        <BiSearch className="w-3 h-7 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3 ml-4">
        <button className="flex items-center bg-blue-600 text-white rounded-full px-2 py-1">
          <FaShoppingCart className="w-5 h-5" />
        </button>
        <button
          onClick={() => setPersonOpen(!personOpen)}
          className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-2 py-1 focus:outline-none"
        >
          <IoPerson />
        </button>
        {personOpen && (
          <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-0.5">
              {personItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 rounded-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <button className="flex items-center bg-blue-600 text-white rounded-full px-2 py-1 hover:bg-blue-700 focus:outline-none">
          <AiOutlineExpandAlt className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
