import NavbarSimple from '@/components/navBar';
import React from 'react';
import TeamMemberCard from '@/components/teamCards';
import teamData from '@/utils/teamData';
import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import Image from 'next/image';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { GoLinkExternal } from "react-icons/go";

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
            Making <b>AI</b> Accessible
          </p>
        </div>
        <a
          href="mailto:hello@atominfra.com"
          className="mt-12 inline-block bg-[#009ded] md:text-lg text-white px-6 py-3 rounded-full font-normal hover:bg-[#3591c0] transition-colors"
        >
          Reach out to us at <span className="font-bold">hello@atominfra.com</span>
        </a>
      </section>
      {/*Coming Soon section*/}
      {/* Coming Soon section */}
<section
  id="products"
  className="w-full min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-4"
>
  <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">Our Products</h2>
  <div className="bg-gray-900 p-6 rounded-lg border-4 border-[#007be5] h-auto md:h-[40vh] w-[80vw] md:w-[50vw] flex flex-col md:flex-row  items-center justify-evenly transition-all">
    <Image
      src="https://res.cloudinary.com/dy8hx2xrj/image/upload/v1729417887/New_Project_mdpjqy.png"
      alt="AI cloud lab"
      height={1000}
      width={1000}
      className="object-contain h-[14rem]  md:h-[18rem] md:w-[10rem]"
    />
    <div className="flex flex-col justify-center text-center md:text-left">
      <h3 className="text-2xl font-semibold mb-4">AI Cloud Lab</h3>
      <p className="text-white mb-6">
        Seamless AI development, deployment and monitoring<br />
        in Cloud all through one interface!
      </p>
      <a href={`${process.env.NEXT_AICLOUDLAB_URL}`} target='_blank'>
      <button className="inline-block bg-[#009ded] text-white px-4 py-2 w-[150px] rounded-full hover:bg-[#3591c0] transition-colors flex justify-center items-center " >
        <div className='flex gap-1 font-bold'>Visit <GoLinkExternal className=' font-bold stroke-2 mt-1'/></div>
      </button>
        </a>
    </div>
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
