import NavbarSimple from '@/components/navBar';
import Image from 'next/image';
import React from 'react';
import img1 from '@/assets/Karun.jpeg';
import img2 from '@/assets/shryansh.jpeg';
import img3 from '@/assets/Piyush.jpeg';
import img4 from '@/assets/chakshu.jpeg';
import img5 from '@/assets/ajay.jpeg';
import TeamMemberCard from '@/components/teamCards';
import { BiSolidMicrochip } from "react-icons/bi";

const teamMembers = [
  {
    name: 'Karun Agarwal',
    role: 'Founder and CEO',
    photo: img1,
    linkedinUrl: 'https://www.linkedin.com/in/singhalkarun/',
    githubUrl: 'https://github.com/singhalkarun',
  },
  {
    name: 'Piyush Raj',
    role: 'DevOps Engineer',
    photo: img3, 
    linkedinUrl: 'https://www.linkedin.com/in/piyushraj-d3bug/',
    githubUrl: 'https://github.com/PiyushRaj927/',
  },
  {
    name: 'Shryansh',
    role: 'Full Stack Engineer',
    photo: img2,
    linkedinUrl: 'https://www.linkedin.com/in/shryansh-chaudhary/',
    githubUrl: 'https://github.com/shryansh107',
  },
];

const advisors = [ {
  name: 'Chakshu Gautam',
  role: 'Technology Advisor',
  photo: img4,
  linkedinUrl: 'https://www.linkedin.com/in/shryansh-chaudhary/',
  githubUrl: 'https://github.com/shryansh107',
},
{
  name: 'Ajay Tyouharia',
  role: 'Business Advisor',
  photo: img5,
  linkedinUrl: 'https://www.linkedin.com/in/shryansh-chaudhary/',
  githubUrl: 'https://github.com/shryansh107',
},]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      
      <div className="w-full z-[10] fixed top-0">
        <NavbarSimple whiteNavbar={true} />
      </div>

      {/* Hero Section */}
      <header className="w-full text-center h-[80vh] flex flex-col items-center justify-center  pt-24 md:pt-44 py-12 ">
        <div className='w-[90vw] md:w-[50vw]'>
          <p className="text-4xl md:text-6xl text-gray-500 font-semibold text-balance font-baloo">
            {/* <span className='text-white font-extrabold  md:text-6xl tracking-normal underline'>Democratizing </span>    */}
            Democratizing AI
          </p>
        </div>
        <a
          href="mailto:hello@atominfra.com"
          className="mt-12 inline-block bg-[#009ded] md:text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-teal-600"
        >
          Reach us at <span className='font-bold'>hello@atominfra.com</span>
        </a>
      </header>

      {/* Projects Section */}
      <section id='projects' className="w-full h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-4">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 ">OUR PROJECTS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* CUDA Version Manager */}
          <div className="w-[90%] md:w-[24rem] bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">CUDA Version Manager</h3>
            <p className="text-gray-400 mb-6">
              Seamless CUDA version switcher for easy GPU project configuration.
            </p>
            <a
              href="https://github.com/atominfra/cvm"
              target='_blank'
              className="inline-block bg-[#009ded] text-white px-4 py-2 rounded-full hover:bg-teal-600"
            >
              View on GitHub →
            </a>
          </div>

          {/* Jupyter Environment Manager */}
          <div className=" w-[90%] md:w-[24rem] bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Jupyter Environment Manager</h3>
            <p className="text-gray-400 mb-6">
              Docker Compose based solution that allows you to easily clone Jupyter environment.
            </p>
            <a
              href="https://github.com/atominfra/jupyter-environment-manager"
              target='_blank'
              className="inline-block bg-[#009ded] text-white px-4 py-2 rounded-full hover:bg-teal-600"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id='team' className="w-full h-screen  flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 ">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                linkedinUrl={member.linkedinUrl}
                githubUrl={member.githubUrl}
              />
          ))}      
        </div>
      </section>

      {/* Advisor Section */}
      <section id='advisors' className="w-full h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500">Meet Our Advisors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {advisors.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                linkedinUrl={member.linkedinUrl}
                githubUrl={member.githubUrl}
              />
          ))}      
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-12 bg-gray-800 text-gray-400">
        <p>© 2024 Atom Infra. All rights reserved.</p>
      </footer>
    </div>
  );
}
