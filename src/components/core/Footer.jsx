"use client";
import Link from "next/link";
import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 md:grid md:grid-cols-4 font_barlow">
        <aside data-aos="fade-up">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/Benedetto-Auto-Detail-Logo.png" // Update with your logo path
                alt="Company Logo"
                className="h-12 w-32" // Set height and width
              />
            </Link>
          </div>

          <p className="text-justify">
            Benedetto Auto Detail is passionate about helping our clients
            maintain their vehicles’ appearance and overall condition. With
            years of experience in the industry, our team is dedicated to
            providing top-notch auto detailing services to help you keep your
            car looking like new.
          </p>

          {/* social media link  */}
          <div className="flex justify-center items-center gap-x-2 ">
            <Link href={"/"}>
              <CiFacebook className="text-[2rem] text-red-500 hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link href={"/"}>
              <IoLogoInstagram className="text-3xl text-red-500 hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link href={"/"}>
              <AiOutlineYoutube className="text-4xl text-red-500 hover:scale-110 hover:font-semibold transition-all" />
            </Link>
          </div>
        </aside>
        <nav className="md:ms-10" data-aos="fade-up">
          <h6 className="footer-title text-red-500">Quick Links</h6>
          <Link
            href={"/"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            About Us
          </Link>
          <Link
            href={"/services"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Services
          </Link>
          <Link
            href={"/gallery"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Gallery
          </Link>
          <Link
            href={"/contact-us"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Contact Us
          </Link>
          <Link
            href={"/booking"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Booking
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title text-red-500">Services</h6>
          <Link
            href={"/auto-detailing"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Auto Detailing
          </Link>
          <Link
            href={"/ceramic-coating"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Ceramic Coating
          </Link>
          <Link
            href={"/interior-coating"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Interior Coating
          </Link>
          <Link
            href={"/paint-protection-film"}
            className="text-decoration-none hover:text-red-500 hover:font-semibold"
          >
            Paint Protection Film
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title text-red-500">Contact Us</h6>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg" />
              <p>949 201 9253</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMailOutline className="text-lg" />
              <p>benedettoautodetail@gmail.com</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <IoLocationOutline className="text-3xl" />
              <p>
                4 Toribeth St, Ladera Ranch, Orange County, CA 92694, United
                States
              </p>
            </div>
          </div>
          <nav className="mt-3">
            <h6 className="footer-title text-red-500">Service Area</h6>
            <div className="cursor-pointer">
              <div className="flex gap-x-2 items-center">
                <IoLocationOutline className="text-lg" />
                <p>South Orange County</p>
              </div>
            </div>
          </nav>
        </nav>
      </footer>

      <div className="relative mt-8 overflow-hidden h-10 bg-transparent border-b border-gray-500">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center "
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <FaCarSide className="text-5xl text-red-600" />
        </motion.div>
      </div>

      <footer
        data-aos="fade-right"
        className="footer bg-base-200 text-base-content flex flex-col p-5"
      >
        <p className="text-start text-red-500">
          Copyright © 2023, Benedetto Auto Detail. All Rights Reserved.
        </p>
        <div className="flex gap-2 justify-end self-end">
          <p className="text-red-500">Privacy Policy</p>|
          <p className="text-red-500">Account Deletion</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
