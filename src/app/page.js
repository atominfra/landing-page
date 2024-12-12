import footerBackgroundImage from '@/assets/layered-waves-footer.svg';
import FeedBack from '@/components/feedback';
import Footer from '@/components/Footer';
import NavbarSimple from '@/components/navBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import TeamMemberCard from '@/components/teamCards';
import { Button } from '@/components/ui/button';
import { default as data, default as teamData } from '@/utils/teamData';
import Image from 'next/image';
import React from 'react';
import { GoLinkExternal } from "react-icons/go";
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Gauge, Lock, BarChart } from 'lucide-react'
import ContactSection from '@/components/contact-section';

export default function Home() {
  const { teamMembers, advisors } = teamData;
  const features = [
    {
      icon: Cpu,
      title: "Compute",
      description: "Access to high-performance GPUs and CPUs for training and inference"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enterprise-grade security with data encryption and access controls"
    },
    {
      icon: Gauge,
      title: "Auto-scaling",
      description: "Dynamic resource allocation based on workload demands"
    },
    {
      icon: BarChart,
      title: "Monitoring",
      description: "Real-time metrics and performance analytics"
    }
  ]
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] text-black font-sans">
      <header className="w-full z-10 fixed top-0 bg-[#FFFFFF]">
        <NavbarSimple whiteNavbar={true} />
      </header>

      {/* Hero Section */}
      <section className="w-full text-center h-screen md:h-screen flex flex-col items-center justify-center  relative font-light px-1">
      <div className="container mt-[10vh] px-4 md:px-6 flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Making{" "}
              <span className="text-blue-600 dark:text-blue-400">AI</span>{" "}
              deployment
              <br />
              super-fast & affordable
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 font-normal md:text-xl dark:text-gray-400">
              Committed to democratizing AI, we make cutting-edge deployment simple, accessible, and affordable for businesses of all sizes.
            </p>
            
        </div>
        <div className='flex items-center justify-center gap-4 '>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
     </section>


      <section
        id="products"
        className="w-full  flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-4"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                <CardTitle className="text-blue-900 dark:text-blue-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-20">Meet Our Team</h2>

        {/* <h2 className="text-4xl font-bold text-center mb-20 text-black mt-28 lg:mt-0">Meet Our Team</h2> */}
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
        className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-20">Meet Our Advisors</h2>
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

      <div className="w-full bg-[#FFFFFF] max-w-7xl">
      {/* <FeedBack /> */}
      <ContactSection/>
    </div>

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
