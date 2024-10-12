import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialPill = () => {
  return (
    <div className="flex  bg-gray-800 rounded-full">
      <Link 
        href="https://github.com/atominfra" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-gray-800 text-white rounded-full overflow-hidden transition-colors duration-300"
      >
        <span className="flex items-center px-3 py-2 h-10 border-gray-300 hover:bg-gray-700">
          <FaGithub className="h-6 w-6" /> 
        </span>
      </Link>

      <Link 
        href="https://www.linkedin.com/company/atominfra/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-gray-800 text-white rounded-full overflow-hidden transition-colors duration-300"
      >
        <span className="flex items-center px-3 py-2 h-10 border-gray-300 hover:bg-gray-700">
          <FaLinkedin className="h-6 w-6" /> 
        </span>
      </Link>
    </div>
  );
};

export default SocialPill;
