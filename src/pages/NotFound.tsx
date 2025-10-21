import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link 
          to="/" 
          className="inline-block bg-gradient-to-r from-[#722f37] to-[#8b3a62] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
