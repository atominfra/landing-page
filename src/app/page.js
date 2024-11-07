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
      <section className="w-full text-center h-screen flex flex-col items-center justify-center pt-24 md:pt-44 py-12 px-4">
        <div className="w-[90vw] md:w-[50vw]">
          <p className="text-4xl md:text-6xl text-gray-500 font-semibold text-balance font-baloo">
          Making <b>AI</b> deployment super-fast and affordable!
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
      <section className="w-full h-[25vh] relative overflow-hidden flex">
        <div className="absolute inset-0 border-t-2 border-gray-600">
          <h1 className='text-lg relative top-[6vh] left-[6vw]'><b>Ambition Forge</b> Pvt. Ltd</h1>
          <h2 className='relative top-[7vh] left-[6vw]'> Indiranagar, Bangalore<br/>
          560038
          </h2>
          <h1 className='absolute top-[6vh] text-lg left-[70vw]'>
            Reach out to us at <a href='mailto:hello@atominfra.com'><b>hello@atominfra.com</b></a>
          </h1>
          <div className='absolute top-[12vh] min-w-[88px] max-w-[6.2vw] right-[7vw]'>
          <SocialPill/>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
}
