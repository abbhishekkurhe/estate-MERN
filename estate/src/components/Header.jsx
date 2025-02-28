import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-gradient-to-r from-purple-900 to-blue-600 shadow-2xl fixed top-0 left-0 w-full ">
      
      <div className="flex flex-wrap justify-between items-center w-full py-4 px-6">
        
        {/* LuxeState - Fully Touching Left Corner */}
        <div className="ml-0">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-wide bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text pt-auanimate-pulse">
            LuxeState
          </h1>
        </div>

        {/* Navigation - Centered on larger screens, hidden on mobile */}
        <nav className="hidden sm:flex flex-1 justify-center space-x-6 md:space-x-10">
          <Link to="/" className="px-4 md:px-6 py-2 text-base md:text-lg font-semibold text-white border-2 border-transparent rounded-md transition-all duration-300 hover:bg-yellow-500 hover:text-indigo-900 hover:border-indigo-900 shadow-lg transform hover:scale-105">
            Home
          </Link>
          <Link to="/about" className="px-4 md:px-6 py-2 text-base md:text-lg font-semibold text-white border-2 border-transparent rounded-md transition-all duration-300 hover:bg-yellow-600 hover:text-indigo-900 hover:border-indigo-900 shadow-lg transform hover:scale-105">
            Contact
          </Link>
          <Link to="/signin" className="px-4  md:px-6 py-2 text-base md:text-lg font-semibold text-white border-2 border-transparent rounded-md transition-all duration-300 hover:bg-yellow-700 hover:text-indigo-900 hover:border-indigo-900 shadow-lg transform hover:scale-105">
            Register
          </Link>
        </nav>

        {/* Search Bar - Responsive Width */}
        <div className="relative w-full sm:w-80 md:w-96 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full py-2 pl-10 pr-16 bg-white bg-opacity-20 text-white rounded-full border border-white border-opacity-50 outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-200 backdrop-blur-lg shadow-xl transition-all hover:bg-opacity-30"
          />
          {/* Search Icon - Clickable */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-yellow-300 transition">
            <FaSearch size={18} />
          </button>
        </div>

        {/* Sign In / Profile Picture - Adjusted for responsiveness */}
        <Link to="/profile" className="ml-4 mt-4 sm:mt-0 px-4 md:px-6 py-2 text-base md:text-lg font-semibold text-white border-2 border-transparent rounded-md transition-all duration-300 hover:bg-yellow-300 hover:text-indigo-900 hover:border-indigo-900 shadow-lg transform hover:scale-105">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span>Sign in</span>
          )}
        </Link>
      </div>
    </header>
  );
}
