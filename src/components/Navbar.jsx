import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-gray-300 py-4 px-10 shadow-lg">
      {/* Logo */}
      <div className="logo">
        <span className="font-extrabold text-2xl text-cyan-400 tracking-wide hover:animate-pulse">
          GlowTask
        </span>
        <p className="text-sm text-gray-400 font-light">
          "Organize, Achieve, Glow Up"
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110">
          Dashboard
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110">
          Manage Tasks
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110">
          About
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 ease-in-out hover:scale-110">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
