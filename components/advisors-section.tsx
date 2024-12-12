'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from 'lucide-react'
import Link from "next/link"

export default function AdvisorsSection() {
  const advisors = [
    {
      name: 'Rahul Kulkarni',
      role: 'Chief Technologist, Samagra',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1729233201/rahulKulkarni_zqdd9r.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/rahul10100/',
    },
    {
      name: 'Chakshu Gautam',
      role: 'Senior Staff Engineer, Samagra',
      photo: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1728836231/chakshu_nrk8zq.jpg",
      linkedinUrl: 'https://www.linkedin.com/in/chakshu-gautam-6918736b/',
    },
    {
      name: 'Ajay Tyouharia',
      role: 'Founder, Zapphire',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1728836233/ajay_jjp6yg.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ajay-tyouharia/',
    },
  ]

  return (
    <section id="team" className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 ">
    <div className="container px-4 md:px-6 max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-black dark:text-white">
        Our Team
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advisors.map((advisor, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <Image
                src={advisor.photo}
                alt={advisor.name}
                width={150}
                height={150}
                className="rounded-full mx-auto object-cover"
              />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-1 text-blue-600 dark:text-blue-400 text-[24px]">{advisor.name}</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{advisor.role}</p>
              <Link 
                href={advisor.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5 mr-1" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

