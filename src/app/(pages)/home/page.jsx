import Link from "next/link";
import React from "react";
import AboutUs from "../about-us/page";
import Services from "../(services)/services/page";
import Gallery from "../gallery/page";
import { TestimonialCarousel } from "./TestimonialCarousel";
import TypeWriter from "@/components/shared/TypeWriter";
import MediaPlayer from "@/components/shared/MediaPlayer";

const typewriterStrings = [
  "Build Your Dream Website – Fast, Easy, and Template-Ready!",
  "Your Website, Your Way – Choose a Template and Go Live!",
  "Instant Websites, Endless Possibilities – Start with a Template Today!",
  "From Idea to Online in Minutes – Ready-Made Templates for Every Business",
  "Effortless Website Creation – Just Pick, Customize, and Launch!",
  "Professional Websites Made Simple – Start with a Stunning Template",
  "Build Your Online Presence – Beautiful Templates, No Coding Needed",
];

function Home() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(/images/Ceramic_Coating_Application_SEO.jpg)`,
      }}
    >
      {/* hero section  */}
      <div className="relative min-h-screen bg-center bg-no-repeat bg-cover bg-black ">
        <div className="absolute inset-0 bg-[url('/images/auto-detailing-scaled-1.png')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 text-center md:text-start">
          <div className="w-full h-full flex flex-col md:flex-row pt-32 px-5 ">
            <div className="md:grow-3 order-2 md:order-1 md:ps-10 p-2">
              <TypeWriter
                strings={typewriterStrings}
                delay={2500}
                speed={5}
                deletionSpeed={40}
                className="inline-block pe-3 transition-all text-white mt-20 md:text-2xl uppercase border-b-4 border-red-600"
              />

              <h1
                data-aos="fade-down"
                className="text-white mt-10 text-2xl md:text-5xl font-extrabold"
              >
                Bring Your Business Online with Effortless Website Building
              </h1>

              <p
                data-aos="fade-up"
                className="text-white mt-10 md:mt-1 text-justify md:text-start md:text-lg font-semibold text-opacity-85 font_barlow"
              >
                Take your business online in no time with our easy-to-use
                website builder. Choose from professionally designed templates,
                customize effortlessly, and launch your site with a few clicks –
                no coding needed!
              </p>

              <div data-aos="fade-right" className="mt-10">
                <Link
                  href={"/booking"}
                  className="btn bg-red-600 text-white text-xl w-40 border-0 hover:bg-red-600 hover:scale-110"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>

            <div
              className="md:grow-1 w-full h-full order-1 md:order-2 items-center bg-red-600 rounded-full mt-10 md:mt-20"
              data-aos="fade-right"
            >
              <MediaPlayer src={"/videos/Laptop has padlock protection for account security.json"} />
            </div>
          </div>
        </div>
      </div>

      <AboutUs showHeroSection={false} />
      <Services showHeroSection={false} limit={3} />
      <Gallery showHeroSection={false} />

      <div className="bg-white pb-10">
        <div className="bg-white flex flex-col justify-center items-center text-black p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
            Testimonials
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            What Clients Say About Our Car detailing Service?
          </h1>
        </div>

        <div data-aos="fade-up" className="w-[85vw] m-auto">
          <TestimonialCarousel />
        </div>
      </div>

      <div className="min-h-[80vh] bg-black/70 text-white flex flex-col justify-center items-center gap-y-5 px-[20%]">
        <h1
          data-aos="fade-right"
          className="mt-10 text-center text-3xl font-extrabold"
        >
          Thank You For Considering Benedetto Auto Detail For Your Car Care
          Needs
        </h1>

        <h1 data-aos="fade-left" className="mt-4 text-center text-lg ">
          We welcome any questions or feedback you may have about our services.
          Please feel free to reach out to us via phone, email or in person at
          our location.
        </h1>

        <Link
          href={"/contact-us"}
          data-aos="fade-up"
          className="btn mb-5 border-0 bg-red-600 text-white hover:bg-red-600 hover:scale-110"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Home;
