import NavbarSimple from '@/components/navBar';
import Image from 'next/image';
import React from 'react';
import img1 from '@/assets/Karun.jpeg';
import img2 from '@/assets/shryansh.jpeg';
import img3 from '@/assets/Piyush.jpeg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      
      <div className="w-full z-[10] fixed top-0">
        <NavbarSimple whiteNavbar={true} />
      </div>

      {/* Hero Section */}
      <header className="w-full text-center pt-24 md:pt-44 py-12 h-[75vh] flex flex-col justify-center items-center">
        <div className='w-[90vw] md:w-[50vw]'>
          <p className="text-4xl md:text-6xl text-gray-500 font-semibold text-balance font-poppins">
            <span className='text-white font-extrabold font-merriweather md:text-6xl tracking-normal underline'>Democratizing! </span>   
            building efficient data centers focused on GPU Needs
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
      <section id='projects' className="w-full max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">OUR PROJECTS</h2>
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
      <section id='team' className="w-full max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">OUR TEAM</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Team Members */}
          <div className="bg-gray-800 text-white p-6 rounded-lg w-[90%] md:w-[24rem] mx-auto shadow-md">
            <div className="flex items-center">
              <Image
                src={img1}
                alt="Karun Agarwal"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Karun Agarwal</h4>
                <p className="text-sm text-gray-400">Founder and CEO</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Leading with vision, building the future
            </p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg w-[90%] md:w-[24rem] mx-auto shadow-md">
            <div className="flex items-center">
              <Image
                src={img3} // Replace with the correct path
                alt="Piyush Raj"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Piyush Raj</h4>
                <p className="text-sm text-gray-400">DevOps Engineer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Bridging development and operations for seamless delivery
            </p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg w-[90%] md:w-[24rem] mx-auto shadow-md">
            <div className="flex items-center">
              <Image
                src={img2}
                alt="Shryansh"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Shryansh</h4>
                <p className="text-sm text-gray-400">Full Stack Engineer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Connecting code, infrastructure, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-12 bg-gray-800 text-gray-400">
        <p>© 2024 Atom Infra. All rights reserved.</p>
      </footer>
    </div>
  );
}
