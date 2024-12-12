import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CustomersSection() {
  const customers = [
    { name: "Customer 1", logo: "/placeholder.svg" },
    { name: "Customer 2", logo: "/placeholder.svg" },
    { name: "Customer 3", logo: "/placeholder.svg" },
    { name: "Customer 4", logo: "/placeholder.svg" }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-black dark:text-white">Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {customers.map((customer, index) => (
            <Card key={index} className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <CardContent className="flex items-center justify-center p-6">
                <div className="relative w-32 h-16">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain filter dark:invert"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

