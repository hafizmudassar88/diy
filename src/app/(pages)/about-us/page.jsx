import { AboutUsCard, HeroSection } from "../../../components/shared";
import React from "react";
import MediaPlayer from "@/components/shared/MediaPlayer";

const cardsDetail = [
  {
    title: "Full Safe and Secure",
    description:
      "We handle your data with great care and expertise. Choosing us comes with total peace.",
  },

  {
    title: "Satisfaction Guaranteed",
    description:
      "We strive to serve you better every day. All we deliver is your total satisfaction and trust in our services.",
  },
];

function AboutUs({ showHeroSection = true }) {
  return (
    <div>
      {/* hero section  */}
      {showHeroSection && (
        <HeroSection
          bgImage={"/images/Ceramic_Coating_Application_SEO.jpg"}
          title={"About Us"}
          subtitle={"About Us"}
        />
      )}

      {/* about us  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="p-10" data-aos="fade-right">
          <MediaPlayer src={"/videos/Creating website script.json"} />
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
            About Us
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            Your Partner in Effortless Website Building{" "}
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            At DIY, we believe building a website should be simple, fast, and
            accessible to everyone. We provide you with stunning, professionally
            designed templates and an intuitive platform that lets you customize
            your site effortlessly. Our mission is to empower individuals and
            businesses to bring their ideas to the digital world without the
            need for technical skills.
          </p>
        </div>
      </div>

      {/* why choose we  */}
      <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-10 bg-red-500 p-10">
        {/* left side  */}

        <div className="text-white">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-black">
            Why Choose Us
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            Why DIY – Simple, Fast, and Tailored to You{" "}
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 text-justify font_barlow"
          >
            At DIY, we put you in the driver’s seat of website creation. Our
            platform combines simplicity with flexibility, letting you choose
            from expertly crafted templates and customize every detail to match
            your brand. DIY is all about making website building easy, fast, and
            accessible to everyone – so you can launch with confidence.
          </p>

          <div className="flex flex-col mt-5 gap-y-3">
            {cardsDetail.map(({ title, description }) => (
              <AboutUsCard
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        {/* right side  */}
        <div className="flex justify-center">
          {/* <div className="mockup-phone mt-5 sm:mt-0">
                      <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 p-0">
                
                <video
                  src="/videos/Website Development.mp4" 
                  className="w-full h-full rounded-3xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline controls={false} />
              </div>
            </div>
          </div> */}
          <div className="p-10" >
            <MediaPlayer src={"/videos/Web Development.json"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
