import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import FeedBack from '@/components/feedback';
import Footer from '@/components/Footer';
import NavbarSimple from '@/components/navBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import TeamMemberCard from '@/components/teamCards';
import { default as data, default as teamData } from '@/utils/teamData';
import Image from 'next/image';
import React from 'react';
import { GoLinkExternal } from "react-icons/go";
export default function Home() {
  const { teamMembers, advisors } = teamData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] text-black font-sans">
      <header className="w-full z-10 fixed top-0 bg-[#FFFFFF]">
        <NavbarSimple whiteNavbar={true} />
      </header>

      {/* Hero Section */}
      <section className="w-full text-center h-screen md:h-screen flex flex-col items-center justify-center  relative font-light px-1">
        {/* <div className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 82%, rgba(17, 24, 39, 1)),url('https://res.cloudinary.com/dy8hx2xrj/image/upload/v1731301690/blue-wave-surface-blockchain-technology-and-science-abstract-background-music-equalizer-of-hexagon-network-wire-frame-illumination-texture-pattern-new-technology-particle-digital-concept-wallpaper-vector_1_uhhiel.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10 // Adjust opacity as needed (0.5 = 50%)
          }}></div> */}
        {/* <div className="w-[90w] md:w-[60vw] relative font-light"> */}
          <p className="text-[32px] md:text-6xl text-black font-regular text-balance font-baloo ">
           Making 
          <p><span className="font-poppins font-medium bg-clip-text text-transparent"style={{backgroundImage: "linear-gradient(to right, #3591C0, #89d4fa)"}}>AI</span> deployment </p>
          super-fast & affordable!
          </p>
        {/* </div> */}
      </section>
      {/*Coming Soon section*/}
      {/* Coming Soon section */}
<section
  id="products"
  className="w-full min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-4"
>
  <h2 className="text-4xl font-bold text-center mb-20 text-black mt-28 lg:mt-0">Our Products</h2>
  <div className="p-[6px] rounded-[10px] bg-inherit  w-[90vw] lg:w-[75vw]">
  <div className="bg-[#FFFFFF] p-4 lg:p-6 rounded-[10px] h-auto transition-all">
  
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
      <p className="text-black mb-6 text-lg opacity-60">
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
         <div key={index} className="w-full  md:w-[40%]  border-2 rounded-[10px] p-8  m-4 md:min-h-[200px]">
         <div className="mb-2 text-2xl font-semibold">{box.title}</div>
         <div className=' text-black opacity-60 font-normal'>{box.description}</div>
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
        <h2 className="text-4xl font-bold text-center mb-20 text-black mt-28 lg:mt-0">Meet Our Team</h2>
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
        <h2 className="text-4xl font-bold text-center mb-20 text-black mt-28 lg:mt-0">Meet Our Advisors</h2>
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

      {/* <div className="w-full bg-[#FFFFFF] min-h-screen max-w-7xl">
      <FeedBack />
    </div> */}

      {/* Footer Section */}
      {/* <section className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={footerBackgroundImage}
            alt="Section divider image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </section> */}

      {/* <ScrollToTopButton /> */}
      <Footer/>
    </div>
  );
}
