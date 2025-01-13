import Image from "next/image";
import Link from "next/link";
export default function PartnersSection() {
  const partners = [
    {
      name: "Microsoft for Startups",
      logo: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1736786184/microsoft-nobg_hdsprt.png",
      css:'',
      link:'https://www.azure.com'
    },
    {
      name: "Rack Corp",
      logo: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1736786108/rackcorp-nobg_nvegud.png",
      css:'',
      link:'https://www.rackcorp.com/'

    },
  ];

  return (
    <section  className="w-full flex justify-center py-12  bg-gradient-to-b from-white to-blue-50 dark:bg-gray-900 ">
      <div className=" px-4 md:px-6 max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center text-black dark:text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center bg-transparent gap-16 pt-8">
          {partners.map((partner, index) => (
              <Link href={partner.link} key={index}>
              <Image
                src={partner.logo}
                alt={partner.name}
                key={index}
                className={`${partner.css} w-[250px] lg:w-[300px] `}
                width={300}
                height={1000}
              /></Link>  
          ))}
        </div>
      </div>
    </section>
  );
}