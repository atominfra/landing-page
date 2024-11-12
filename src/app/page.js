import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import FeedBack from '@/components/feedback';
import NavbarSimple from '@/components/navBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SocialPill from '@/components/SocialPill';
import TeamMemberCard from '@/components/teamCards';
import { default as data, default as teamData } from '@/utils/teamData';
import Image from 'next/image';
import React from 'react';
import { GoLinkExternal } from "react-icons/go";
export default function Home() {
  const { teamMembers, advisors } = teamData;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      <header className="w-full z-10 fixed top-0 bg-gray-900">
        <NavbarSimple whiteNavbar={true} />
      </header>
      {/* Hero Section */}
      <section className="w-full text-center h-screen flex flex-col items-center justify-center pt-10 md:pt-38 py-12 px-4 relative">
        <div className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 82%, rgba(17, 24, 39, 1)),url('https://res.cloudinary.com/dy8hx2xrj/image/upload/v1731301690/blue-wave-surface-blockchain-technology-and-science-abstract-background-music-equalizer-of-hexagon-network-wire-frame-illumination-texture-pattern-new-technology-particle-digital-concept-wallpaper-vector_1_uhhiel.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10 // Adjust opacity as needed (0.5 = 50%)
          }}></div>
        <div className="w-[90w] md:w-[60vw] h-50 relative">
          <p className="text-[32px] md:text-6xl text-white font-regular text-balance font-baloo z-10">
          Making <span className="font-bold bg-clip-text text-transparent"style={{backgroundImage: "linear-gradient(to right, #3591C0, #89d4fa)"}}>AI</span> deployment super-fast and affordable!
          </p>
        </div>
      </section>
      {/* Coming Soon section */}
<section
  id="products"
  className="w-full min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto pt-32 pb-16 px-4"
>
  <h2 className="text-4xl font-bold text-center text-gray-500 mt-28 lg:mt-0">Our Products</h2>
  <div className="p-[6px] rounded-[10px] bg-inherit  w-[90vw] lg:w-[75vw]">
  <div className="bg-gray-900 p-4 lg:p-6 rounded-[10px] h-auto transition-all">
  
  <div className='flex flex-col lg:flex-row  items-center justify-evenly '>
    <Image
    src="https://res.cloudinary.com/dy8hx2xrj/image/upload/v1730454166/New_Project_mdpjqy.png"
      alt="AI cloud lab"
      height={300}
      width={400}
      className="object-contain h-[14rem]  lg:h-[26rem] lg:w-[30rem]"
    />
    <div className="flex flex-col justify-center text-center lg:text-left ">
      <h3 className="text-4xl font-semibold mb-4">AI Cloud Lab</h3>
      <p className="text-white mb-6 text-lg opacity-60">
        Seamless AI development, deployment and monitoring<br />
        in Cloud all through one interface!
      </p>
      <a href={`${process.env.NEXT_AICLOUDLAB_URL}`} target='_blank' className='flex lg:block  justify-center'>
      <button className=" bg-[#009ded]  text-white px-4 mb-6 py-2 w-[150px] rounded-full hover:bg-[#3591c0] transition-colors flex justify-center items-center " >
        <div className='flex gap-1 font-bold'>Visit <GoLinkExternal className=' font-bold stroke-2 mt-1'/></div>
      </button>
        </a>
      </div>
        </div>
 <div className="flex flex-wrap justify-center mb-6">
      {data.aicloudlab_features.map((box, index) => (
         <div key={index} className="w-full  md:w-[40%]  border-2 rounded-[10px] p-8 bg-gray-800 m-4 md:min-h-[200px]">
         <div className="mb-2 text-2xl font-semibold">{box.title}</div>
         <div className=' text-gray-200 font-normal'>{box.description}</div>
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
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-500 mt-28 lg:mt-0">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-[60rem]">
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

      {/* <div className="w-full bg-gray-900 min-h-screen max-w-7xl">
      <FeedBack />
    </div> */}
      {/* Footer Section */}
      <section className="flex justify-between items-center h-[25vh] w-full border-t-[6px] border-[#29303E] min-h-[180px] md:px-[8vw] px-[2vw] text-base md:text-lg">
        <div className="p-2">
          <h1>Ambition Forge Pvt. Ltd</h1>
          <h1> Indiranagar, Bangalore<br/>
          560038
          </h1>
        </div>
        <div className='space-y-[10.2px] md:space-y-[12.2px] flex-wrap justify-items-end p-2'>
          <h1 className='no-underline'>
            <a href='mailto:hello@atominfra.com'>hello@atominfra.com</a>
          </h1>
          <div className='max-w-[100px]'><SocialPill/></div>
        </div>
      </section>
    </div>
  );
}
