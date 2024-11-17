// components/TeamMemberCard.js
import React from 'react';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const TeamMemberCard = ({ name, role, photo, linkedinUrl, githubUrl }) => {
  return (
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 ">
      <div className="bg-[#FFFFFF] hover:bg-gray-100 rounded-2xl h-72 shadow-lg w-56 p-4 flex flex-col justify-center items-center text-center border">
      <div className="mb-6 rounded-full bg-gray-200 p-1 w-32 h-32 flex items-center justify-center">
          <Image
            src={photo}
            alt={name}
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
      <h4 className="text-black font-semibold text-lg mb-1">{name}</h4>
      <p className="text-black text-sm mb-3 opacity-60">{role}</p>
      {/* <div className="flex space-x-2">
        <FaLinkedin size={20} />
      </div> */}
      </div>
    </a>
  );
};

export default TeamMemberCard;
