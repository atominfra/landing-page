import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "Apple", logo: "/placeholder.svg" },
    { name: "Google", logo: "/placeholder.svg" }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-black dark:text-white">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div key={index} className="relative w-40 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

