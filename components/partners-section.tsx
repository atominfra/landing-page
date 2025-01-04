import Image from "next/image";
export default function PartnersSection() {
  const partners = [
    {
      name: "Microsoft for Startups",
      logo: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1735997113/Microsoft_for_startups_bbl3nh.png",
    },
  ];

  return (
    <section  className="w-full flex justify-center py-12  bg-gradient-to-t from-white to-blue-50 dark:bg-gray-900 ">
      <div className=" px-4 md:px-6 max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center text-black dark:text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center bg-transparent">
          {partners.map((partner, index) => (
              <Image
                src={partner.logo}
                alt={partner.name}
                key={index}
                // className=" h-[200px] w-[500px]"
                width={1000}
                height={1000}
              />
          ))}
        </div>
      </div>
    </section>
  );
}