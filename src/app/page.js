import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import NavbarSimple from '@/components/navBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import TeamMemberCard from '@/components/teamCards';
import { default as data, default as teamData } from '@/utils/teamData';
import Image from 'next/image';
import React from 'react';
import { GoLinkExternal } from "react-icons/go";
import data from "@/utils/teamData"
import FeedBack from '@/components/feedback';

export default function Home() {
  const { teamMembers, advisors } = teamData

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
          Reach out to us at{' '}
          <span className="font-bold">hello@atominfra.com</span>
        </a>
      </section>
      {/*Coming Soon section*/}
      {/* Coming Soon section */}
<section
  id="products"
  className="w-full min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-4"
>
  <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">Our Products</h2>
  <div className="p-[4px] rounded-lg bg-gradient-to-r from-[#0EB3FF] to-[#FFFFFF] w-[90vw] md:w-[85vw]">
  <div className="bg-gray-900 p-3 md:p-6 rounded-lg h-auto transition-all">
  
  <div className='flex flex-col md:flex-row  items-center justify-evenly '>
    <Image
      src="https://res.cloudinary.com/dy8hx2xrj/image/upload/v1730454166/Frame_1_e7wgpb.png"
      alt="AI cloud lab"
      height={300}
      width={400}
      className="object-contain h-[14rem]  md:h-[18rem] md:w-[25rem]"
    />
    <div className="flex flex-col justify-center text-center md:text-left md:w-[35vw]">
      <h3 className="text-2xl font-semibold mb-4">AI Cloud Lab</h3>
      <p className="text-white mb-6">
        Seamless AI development, deployment and monitoring<br />
        in Cloud all through one interface!
      </p>
      <a href={`${process.env.NEXT_AICLOUDLAB_URL}`} target='_blank' className='flex md:block  justify-center'>
      <button className=" bg-[#009ded]  text-white px-4 py-2 w-[150px] rounded-full hover:bg-[#3591c0] transition-colors flex justify-center items-center " >
        <div className='flex gap-1 font-bold'>Visit <GoLinkExternal className=' font-bold stroke-2 mt-1'/></div>
      </button>
        </a>
      </div>
        </div>
    <div className='text-center w-full font-poppins text-3xl font-semibold my-20'>We make AI deployment <span className="italic bg-gradient-to-r from-[#1AB7FF] to-[#0051FF] bg-clip-text text-transparent">
  super-fast 
</span> {" "}
 and affordable!</div>
 <div className="flex flex-wrap justify-center">
      {data.aicloudlab_features.map((box, index) => (
         <div key={index} className="w-full  md:w-[40%]  border-2 rounded-[10px] p-8 font-poppins bg-gray-800 m-4 md:min-h-[200px]">
         <div className="mb-2 text-2xl font-semibold">{box.title}</div>
         <div>{box.description}</div>
       </div>
      ))}
    </div>
    </div>
  <div>
  
 

    </div>
  </div>
</section>




      {/* Team Section */}
      <section
        id="team"
        className="w-full min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">
          Meet Our Team
        </h2>
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
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">
          Meet Our Advisors
        </h2>
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

      <div className="w-full bg-gray-900 min-h-screen max-w-7xl">
      <FeedBack />
    </div>

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
  )
}
