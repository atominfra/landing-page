'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Making AI deployment super-fast & affordable
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-400">
              Streamline your AI infrastructure with AtomInfra. Deploy, scale, and monitor your models with ease.
            </p>
          </div>
          <div className="space-x-4">
            <div className="inline-block">
            <a href={`${process.env.NEXT_AICLOUDLAB_URL}`} target='_blank' >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
            <div className="inline-block">
              <Button variant="outline" size="lg" asChild>
                <Link href="#ai-cloud-lab">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
