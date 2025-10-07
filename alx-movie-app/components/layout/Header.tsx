import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFilm} className="text-2xl text-blue-400" />
            <h1 className="text-2xl font-bold">ALX Movie App</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/movies" className="hover:text-blue-400 transition-colors">Movies</a>
            <a href="/favorites" className="hover:text-blue-400 transition-colors">Favorites</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;