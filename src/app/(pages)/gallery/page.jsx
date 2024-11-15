import { HeroSection } from "@/components/shared";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";

function Gallery({ showHeroSection = true }) {
  return (
    <div>
      {/* hero section  */}
      {showHeroSection && (
        <HeroSection
          bgImage={
            "/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg"
          }
          title={"Gallery"}
          subtitle={"Gallery"}
        />
      )}

      <div className="bg-white text-black/90 flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase text-red-600">
          Gallery
        </span>

        <p className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]">
          Explore Our Gallery
        </p>
      </div>

      <div className="h-screen py-10 w-full bg-white">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

export default Gallery;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Auto Detailing</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Welcome to Benedetto Auto Detail, your one-stop solution for premium
        auto detailing services. We are a team of experienced...
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ceramic Coating
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        CRYSTAL SERUM CERAMIC COATING provides a Supreme Hard Protection,
        Scratch & Swirls Resistant. This Coating Provides...
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Interior Coating
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        LEATHER GUARD COATING is made out of nanotechnology and is a Super
        Hydro-Phobic Coating that Protects, Leather...
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paint Protection Film
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Benedetto Auto Detail understands that your vehicle is an investment
        that you want to protect. That’s why we offer the best paint protection
        film services to keep your car’s paint looking like new.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/10bea6_02ccb98b176c4e05b03aee7c30187710_mv2.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/shutterstock_1447469384-1-1080x608-1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/IMG_20170604_003947.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/bl_01_576d8097-08a2-4503-b06b-a499c5e261f0.jpg",
  },
];
