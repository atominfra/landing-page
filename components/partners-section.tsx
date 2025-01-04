import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    {
      name: "Microsoft for Startups",
      logo: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1735997113/Microsoft_for_startups_bbl3nh.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-black dark:text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative w-64 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-cover filter dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}