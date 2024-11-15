import { HeroSection } from "@/components/shared";
import ServiceImageCard from "@/components/shared/ServiceImageCard";
import React from "react";

const servicesList = [
  {
    image: "/images/10bea6_d7ef6552458847eab04c1b266d4dd912_mv2.jpeg",
    title: "Wash & Wax Detail Service",
    subtitle: "Starting at 1100",
  },
  {
    image: "/images/10bea6_46c84e6866ac43fd8a774ab5911b714b_mv2.jpeg",
    title: "Full Front Package",
    subtitle: "Starting at 1500",
  },
  {
    image: "/images/10bea6_54df1abcb6f34fb59bc65426dacfb7c8_mv2.jpeg",
    title: "Full Front Plus +",
    subtitle: "Starting at 2100",
  },
  {
    image: "/images/10bea6_45fd3b3e76db4c4db29fab522272b063_mv2.jpeg",
    title: "Full Body",
    subtitle: "Call For Estimate",
  },
];

function PaintProtectionFilm() {
  return (
    <div>
      {/* hero section  */}
      <HeroSection
        bgImage={"/images/10bea6_c97551ce357045e08263e1df3a6beed1_mv2.jpg"}
        title={
          "Ladera Ranch Paint Protection Film Experts Serving All Across Orange County, Ca"
        }
        subtitle={"Paint Protection Film"}
      />

      {/* Auto Detailing  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="w-full mt-4 p-10">
          <img
            src="/images/Ceramic-Pro-Leather.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-red-600">
            Paint Protection Film
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            Best Paint Protection Film Coating Services in Town
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            Benedetto Auto Detail understands that your vehicle is an investment
            that you want to protect. That’s why we offer the best paint
            protection film services to keep your car’s paint looking like new.
            Our Paint Protection Film California is a high-quality, transparent
            film that is applied to your vehicle’s paintwork. It provides a
            protective barrier against everyday wear and tear, including
            scratches, chips, and dings caused by stones, gravel, and road
            debris. Our team of trained technicians is experienced in installing
            paint protection film on all types of vehicles, from sports cars to
            SUVs. We use only the highest quality films from leading
            manufacturers to ensure long-lasting protection. Our paint
            protection film services are not only functional but also
            aesthetically pleasing. The transparent film is virtually invisible,
            ensuring that your vehicle’s appearance is not compromised. It also
            adds a glossy finish that enhances your car’s look.
          </p>
        </div>
      </div>

      {/* services procedure  */}
      <div className="bg-red-500 p-5">
        <div className="text-white flex flex-col justify-center items-center m-5 mb-10">
          <h1
            data-aos="fade-down"
            className="mt-10 text-3xl md:text-5xl font-extrabold"
          >
            Paint Protection Film Coating Cost
          </h1>
          <h1
            data-aos="fade-down"
            className="mt-4 text-lg md:text-2xl text-center md:text-start font-extrabold"
          >
            extra charge for large vehicle
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12 md:px-14">
          {servicesList.map((service) => (
            <ServiceImageCard
              key={service.title}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaintProtectionFilm;
