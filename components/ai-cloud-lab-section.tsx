'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BarChart3, Layers, ArrowRightLeft } from 'lucide-react'

export default function AICloudLabSection() {
  const features = [
    // {
    //   icon: Code,
    //   title: "Built for AI Engineers",
    //   description: "Auto package and deploy jupyter notebooks, abstracting out all the complex, time-consuming tasks."
    // },
    {
      icon: BarChart3,
      title: "Provides Flexibility",
      description: "Switch between compute providers easily as your needs change without being locked in."
    },
    {
      icon: Layers,
      title: "User-Friendly Interface",
      description: "Manage deployments through a simple interface built for humans, not just engineers."
    },
    {
      icon: ArrowRightLeft,
      title: "Cost Savings",
      description: "Choose the most cost-effective provider and save money."
    }
  ]

  return (
    <section id="ai-cloud-lab" className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 ">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
            AI Cloud Lab
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
            A cutting-edge platform designed to accelerate AI development and deployment with enterprise-grade infrastructure.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                <CardTitle className="text-blue-900 dark:text-blue-100 text-[22px]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

