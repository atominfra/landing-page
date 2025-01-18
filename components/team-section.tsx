'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from 'lucide-react'
import Link from "next/link"

export default function TeamSection() {
  const team = [
    {
      name: 'Karun Agarwal',
      role: 'Founder and CEO',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1728836228/karun_fan4bm.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/singhalkarun/',
    },
    {
      name: 'Shryansh',
      role: 'Founding Member, Frontend',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1728836215/shryansh_qfjiae.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/shryansh-chaudhary/',
    },
    {
      name: 'Prabhmeet Singh',
      role: 'Founding Member, Design',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1728843295/WhatsApp_Image_2024-10-13_at_23.41.59_ndo34n.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/prabhmeet-singh-11446699w/',
    },
    {
      name: 'Karan Gill',
      role: 'Founding Member, Backend',
      photo: 'https://res.cloudinary.com/dy8hx2xrj/image/upload/v1737218545/karanGill_kh5qko.png',
      linkedinUrl: 'https://www.linkedin.com/in/karan-gill-61353a261/',
    },
  ]

  return (
    <section id="team" className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 ">
      <div className="container px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-black dark:text-white">
          Our Team
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
    {team.map((member, index) => (
      <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all w-full max-w-[calc(33.333%-2rem)] min-w-[320px]">
        <CardHeader>
          <Image
            src={member.photo}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-full mx-auto object-cover"
          />
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle className="mb-1 text-blue-600 dark:text-blue-400 text-[24px]">{member.name}</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{member.role}</p>
          <Link
            href={member.linkedinUrl}
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

