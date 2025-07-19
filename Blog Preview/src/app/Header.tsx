"use client";

import React from "react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } py-3 shadow-md max-w-5xl mx-auto rounded-lg px-4`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="/newsletter" className="hover:text-gray-500">
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
