import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/featuresSection"
import TeamSection from "@/components/team-section"
import AdvisorsSection from "@/components/advisors-section"
import ContactSection from "@/components/contact-section"
import { Toaster } from 'react-hot-toast'
import PartnersSection from "@/components/partners-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 ">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* <FeaturesSection /> */}
        <PartnersSection />
        <TeamSection />
        <AdvisorsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

