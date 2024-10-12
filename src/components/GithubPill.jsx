import React from 'react';
import Link from 'next/link';
import { FaGithub, FaStar } from 'react-icons/fa';

const GithubPill = () => {
  return (
    <Link 
    href="https://github.com/yourusername/yourrepo" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center bg-gray-800 text-white rounded-full overflow-hidden hover:bg-gray-700 transition-colors duration-300"
  >
    <span className="flex items-center px-3 py-2 h-10 border-gray-300">
      <FaGithub className="h-15 w-15" /> 
    </span>
  </Link>
  
  );
};

export default GithubPill;