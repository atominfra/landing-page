import NavbarSimple from '@/components/navBar';
import React from 'react';
import TeamMemberCard from '@/components/teamCards';
import teamData from '@/utils/teamData';
import backgroundImage from '@/assets/blurry-gradient.svg';
import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import Image from 'next/image';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  const { teamMembers, advisors } = teamData;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans"
      // style={{
      //   backgroundImage: `url(${backgroundImage.src})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundAttachment: 'fixed', 
      // }}
    >
      <header className="w-full z-[10] fixed top-0 bg-gray-900">
        <NavbarSimple whiteNavbar={true} />
      </header>

      {/* Hero Section */}
      <section className="w-full text-center h-[100vh] flex flex-col items-center justify-center pt-24 md:pt-44 py-12">
        <div className="w-[90vw] md:w-[50vw]">
          <p className="text-4xl md:text-6xl text-gray-500 font-semibold text-balance font-baloo">
            Democratizing AI
          </p>
        </div>
        <a
          href="mailto:hello@atominfra.com"
          className="mt-12 inline-block bg-[#009ded] md:text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-[#3591c0]"
        >
          Reach us at <span className="font-bold">hello@atominfra.com</span>
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-4">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500">OUR PROJECTS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* CUDA Version Manager */}
          <a
              href="https://github.com/atominfra/cvm"
              target="_blank"
            >
          <div className="w-[90%] md:w-[24rem] bg-gray-800 p-6 rounded-lg shadow-lg  ">
            <h3 className="text-2xl font-semibold mb-4">CUDA Version Manager</h3>
            <p className="text-gray-400 mb-6">
              Seamless CUDA version switcher for easy GPU project configuration.
            </p>
            
              <button 
              className="inline-block bg-[#009ded] text-white px-4 py-2 rounded-full hover:bg-[#3591c0]"
              
              >View on GitHub →
              </button>
          </div>
            </a>

          {/* Jupyter Environment Manager */}
          <a
              href="https://github.com/atominfra/jupyter-environment-manager"
              target="_blank"
            >
          <div className="w-[90%] md:w-[24rem] bg-gray-800 p-6 rounded-lg shadow-lg  ">
            <h3 className="text-2xl font-semibold mb-4">Jupyter Environment Manager</h3>
            <p className="text-gray-400 mb-6">
              Docker Compose based solution that allows you to easily clone Jupyter environment.
            </p>
            
              <button 
              className="inline-block bg-[#009ded] text-white px-4 py-2 rounded-full hover:bg-[#3591c0]"
              
              >View on GitHub →
              </button>
          </div>
            </a>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
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
      <section id="advisors" className="w-full min-h-screen relative flex flex-col items-center justify-center py-12">
        <div className="relative  w-full max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-500">Meet Our Advisors</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {advisors.map((member) => (
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
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 top-[-100%]">
          <Image
            src={footerBackgroundImage}
            alt="Section divider image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </section>

      <ScrollToTopButton />

    </div>
  );
}
