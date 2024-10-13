import NavbarSimple from '@/components/navBar';
import React from 'react';
import TeamMemberCard from '@/components/teamCards';
import teamData from '@/utils/teamData';
import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import Image from 'next/image';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  const { teamMembers, advisors } = teamData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      <header className="w-full z-10 fixed top-0 bg-gray-900">
        <NavbarSimple whiteNavbar={true} />
      </header>

      {/* Hero Section */}
      <section className="w-full text-center h-screen flex flex-col items-center justify-center pt-24 md:pt-44 py-12 px-4">
        <div className="w-[90vw] md:w-[50vw]">
          <p className="text-4xl md:text-6xl text-gray-500 font-semibold text-balance font-baloo">
            Making AI Accessible
          </p>
        </div>
        <a
          href="mailto:hello@atominfra.com"
          className="mt-12 inline-block bg-[#009ded] md:text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-[#3591c0] transition-colors"
        >
          Reach out to us at <span className="font-bold">hello@atominfra.com</span>
        </a>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">OUR PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* CUDA Version Manager */}
          <a
            href="https://github.com/atominfra/cvm"
            target="_blank"
            className="w-full"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-52 transition-transform transform  flex flex-col justify-evenly">
              <h3 className="text-2xl font-semibold mb-4">CUDA Version Manager</h3>
              <p className="text-gray-400 mb-6">
                Seamless CUDA version switcher for easy GPU project configuration.
              </p>
              <button className="inline-block bg-[#009ded] text-white px-4 py-2 w-60 rounded-full hover:bg-[#3591c0] transition-colors">
                View on GitHub →
              </button>
            </div>
          </a>

          {/* Jupyter Environment Manager */}
          <a
            href="https://github.com/atominfra/jupyter-environment-manager"
            target="_blank"
            className="w-full"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-52 transition-transform transform flex flex-col justify-evenly ">
              <h3 className="text-2xl font-semibold mb-4">Jupyter Environment Manager</h3>
              <p className="text-gray-400 mb-6">
                Docker Compose based solution that allows you to easily clone Jupyter environment.
              </p>
              <button className="inline-block bg-[#009ded] text-white px-4 py-2 w-60 rounded-full hover:bg-[#3591c0] transition-colors">
                View on GitHub →
              </button>
            </div>
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member) => (
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
      <section
        id="advisors"
        className="w-full min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">Meet Our Advisors</h2>
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
      </section>

      {/* Footer Section */}
      <section className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0">
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
