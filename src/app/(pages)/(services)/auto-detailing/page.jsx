import { HeroSection } from "@/components/shared";
import ServiceProcedureCard from "@/components/shared/ServiceProcedureCard";
import React from "react";

const servicesList = [

  {
    title: "Wash & Wax Detail Service",
    price: "100",
    procedure: {
      "Exterior Includes": [
        "Exterior Wash",
        "Hand & Air Dry",
        "Wheel Brightening",
        "Tires & Plastic Dressing",
        "Windows Cleaning",
        "Wax Protection on all paint.",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning",
      ],
    },
    notes: [
      "Upgrade to Ceramic Wax (Hybrid Sealant ) for an extra $60 to $100 Depending on the size of the Vehicle.",
    ],
  },
  
  {
    title: "Two Cars Minimum Cleaning Wash Service (Ladera Ranch Exclusive)",
    price: "120",
    procedure: {
      "Exterior Includes": [
        "Exterior Wash",
        "Hand & Air Dry",
        "Wheel Brightening",
        "Tires & Plastic Dressing",
        "Windows Cleaning",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning",
      ],
    },
    notes: [
      "Extra charge for big vehicles",
    ],
  },

  {
    title: "Interior Detail Service",
    price: "225",
    procedure: {
      "Interior Includes": [
        "Complete Interior Vacuuming (Seats, Carpets, and Trunk)",
        "Shampooing of All Carpets and Floor Mats",
        "Deep Cleaning and Conditioning of Leather or Fabric Seats",
        "Dashboard and Door Panels Cleaning & Conditioning",
        "Detailed Cleaning of Vents, Knobs, and Buttons",
        "Middle Console and Cup Holder Cleaning",
        "Interior Windows Cleaning (Streak-Free Finish)",
        "Odor Removal and Fresh Scent Application",
      ],
    },
    notes: [
      "Charges may vary depending on the side and condition of the Vehicle",
    ],
  },

  {
    title: "Exterior Clay Bar Detail Service",
    price: "200",
    procedure: {
      "Exterior Includes": [
        "Exterior Wash",
        "Wheel Brightening",
        "Wheel Brightening",
        "Clay Bar Exterior Paint",
        "Removal of Contamination",
        "Oxidation",
        "Fall Out",
        "Wax Protection on all paint",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning",
      ],
    },
    notes: [
      "Upgrade to Ceramic Wax (Hybrid Sealant ) for an extra $60 to $100 Depending on the size of the Vehicle.",
      "Charges may vary depending on the side and condition of the Vehicle",
    ],
  },

  {
    title: "Complete Detail Service",
    price: "350",
    procedure: {
      "Exterior Includes": [
        "Exterior Wash",
        "Hand & Air Dry",
        "Wheel Brightening",
        "Clay Bar Exterior Paint",
        "Tires & Plastic Dressing",
        "Windows Cleaning",
        "Wax Protection on all paint",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Carpets & Seats are pre spotted",
        "hand shampooed and deep cleaned Shampoo Vinyl",
        "Leather",
        "Plastics & Cloth",
        "LEXOLE Leather Conditioner moisturizes fine leather & prevents cracking",
        "fading and staining",
      ],
    },
    notes: [
      "Upgrade to Ceramic Wax (Hybrid Sealant ) for an extra $60 to $100 Depending on the size of the Vehicle.",
      "Charges may vary depending on the side and condition of the Vehicle"
    ],
  },

  {
    title: "Sealant Service Protection",
    price: "500",
    procedure: {
      "Exterior Includes": [
        "Exterior Wash",
        "Wheel Brightening",
        "Tires & Plastics Dressing",
        "Tree Sap & Water Spot Removal",
      ],
      Plus: [
        "Full Stage of Clay Bar. (The Clay Bar Will Remove All Oxidation Making The Vehicle Ready For The Next Step.)",
        "Full Stage Of Machine Polish On The Paint. In This First Stage, The Polish Will Correct The Paint From: Surface Scratches That The Vehicle May Have, The Swirl Marks On The Paint, Spider Webs Reflection, Paint Defection, Enhance Paint Finished Look.",
        "Full Layer of Sealant G-Techniq Exo V4. In This Last Stage, the Sealant is Applied by Hand, On The Surface of the Paint To Enhance Maximum Protection and Durability On The Paint. (Protection lasts 12 months.)",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning",
      ],
    },
    notes: [],
  },

  {
    title: "Paint Correction Detail Service",
    price: "499",
    procedure: {
      "This service is for those vehicles that": [
        "Have a lot of Scratches on the paint.",
        "Have Deep Scratches on the paint.",
        "Have Swirl Marks on the paint.",
        "Have Machine Polished marks from the mistake of past Detailers.",
        "From all these types of issues, the paint needs Paint Correction.",
      ],
      "Exterior Includes": [
        "Exterior Wash",
        "Wheel Brightening",
        "Tires & Plastics Dressing",
        "Tree Sap & Water Spot Removal",
      ],
      Plus: [
        "Full Stage of Clay Bar. (The Clay Bar Will Remove All Oxidation Making The Vehicle Ready For The Next Step.)",
        "Full Stage of Compound On The Paint (Applied by Dual Action Rotary Rupes). In This First Stage, The Compound Will Correct The Paint From 'The Deep Scratches' & 'The Multiple Scratches That The Vehicle May Have' & 'The Swirl Marks On The Paint'.",
        "Full Stage of Polish On The Paint (Applied by Dual Action Rotary Rupes). In This Second Stage, The Polish Will Continue Correcting The Paint, and Will Make The Paint Come Alive Again & Will Bring The Paint To A Beautiful High-Gloss Shine. After This, The Paint Is Ready For The Last Stage.",
        "Full Stage of Wax & Sealant (Applied by Dual Action Rotary Rupes). In This Last Stage, The Wax Will Seal The Paint and Clear Coat, Protecting It From The Outside Environment. (Protection Lasts 3 Months.)",
      ],
    },
    notes: ["Extra Charge for Larger Vehicles. Call for an estimate."],
  },

 
];

function AutoDetailing() {
  return (
    <div>
      {/* hero section  */}
      <HeroSection
        bgImage={"/images/10bea6_e313de2941484aed864686c7ede825ee_mv2.png"}
        title={"Auto Detailing Near Ladera Ranch & Orange County"}
        subtitle={"Auto Detailing"}
      />

      {/* Auto Detailing  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="w-full mt-4 p-10">
          <img
            src="/images/shutterstock_1792547533_1200x.webp"
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-red-600">
            Auto Detailing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Taking Care of Your Car with Auto Detailing Needs
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            Welcome to Benedetto Auto Detail, your one-stop solution for premium
            auto detailing services. We are a team of experienced professionals
            dedicated to providing the highest quality auto detailing services
            to keep your vehicle looking as good as new. Our Auto Detailing
            California include exterior detailing, interior detailing, engine
            detailing, and paint correction. We use only the best products and
            equipment to ensure your vehicle receives the utmost care and
            attention. Our team takes pride in our work, and we are committed to
            providing the highest level of customer satisfaction. Our exterior
            detailing services include a thorough wash, wax, and polish to
            restore your vehicle’s shine and protect it from the elements. Our
            interior detailing services include a deep clean of all surfaces,
            including leather conditioning and carpet shampooing, leaving your
            vehicle looking and smelling fresh.
          </p>
        </div>
      </div>

      {/* services procedure  */}
      <div className="bg-red-500 p-10">
        <div className="text-white flex flex-col justify-center items-center m-5 mb-10">
          <h1
            data-aos="fade-down"
            className="mt-10 text-3xl md:text-5xl font-extrabold"
          >
            Auto Detailing
          </h1>
          <h1
            data-aos="fade-down"
            className="mt-4 text-lg md:text-2xl text-center md:text-start font-extrabold"
          >
            extra charge for large vehicle
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <ServiceProcedureCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutoDetailing;
