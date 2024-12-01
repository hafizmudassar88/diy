"use client";

import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";

// Dynamically import components
const HeroSection = dynamic(() => import("@/components/shared/HeroSection"), {
  ssr: false,
});
const MediaPlayer = dynamic(() => import("@/components/shared/MediaPlayer"), {
  ssr: false,
});

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset(); // Clear the form fields after submission
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        bgImage="/images/content-management-service-for-cars.jpg"
        title="Contact Us"
        subtitle="Contact Us"
      />

      {/* Contact Us Section */}
      <div className="w-full bg-white text-black flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
          Contact Us
        </span>

        <p
          data-aos="fade-up"
          className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
        >
          Get In Touch Today
        </p>
        <p
          data-aos="fade-up"
          className="mt-2 text-md text-opacity-85 font_barlow text-center p-2"
        >
          Get in Touch with Us for Your Website Creation Journey
        </p>
      </div>

      {/* Contact Details */}
      <div className="min-h-[40vh] grid grid-cols-1 md:grid-cols-3 gap-5 m-5 md:mx-10">
        {[
          {
            icon: <IoLocationOutline className="text-5xl text-white" />,
            title: "Address",
            content: "4 Highfield Street, Ladera Ranch, London, UK SW1A 1AA",
          },
          {
            icon: <LuPhoneCall className="text-5xl text-white" />,
            title: "Phone Number",
            content: "+44 20 7946 0958",
          },
          {
            icon: <MdOutlineAttachEmail className="text-5xl text-white" />,
            title: "Our Mailbox",
            content: "diybuilders@gmail.com",
          },
        ].map(({ icon, title, content }) => (
          <div
            key={title}
            className="bg-[#020202] flex flex-col gap-5 items-center justify-center rounded-3xl text-white p-5"
          >
            <div className="bg-[#ED1C24] w-20 h-20 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p
              data-aos="fade-up"
              className="mt-2 text-md text-opacity-85 font_barlow text-center"
            >
              {content}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="min-h-[80vh] rounded-3xl grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white m-5 md:m-20">
        {/* Form Section */}
        <div
          className="text-black rounded-3xl shadow-xl bg-[#f4f4f4] p-5 md:p-10"
          data-aos="fade-right"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {[
              { name: "name", type: "text", label: "Name" },
              { name: "phone", type: "number", label: "Phone" },
              { name: "email", type: "email", label: "Email" },
            ].map(({ name, type, label }) => (
              <div key={name} className="mb-4">
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  {...register(name, { required: true })}
                  className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm ${
                    errors[name] ? "border-red-500" : ""
                  }`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-xs mt-2">
                    {label} is required
                  </p>
                )}
              </div>
            ))}

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">Message is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-4 mt-10 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Location Map */}
      <div className="w-full h-[70vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.880349823941!2d-0.127758!3d51.503364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c243b1dc11%3A0x75b6d3b99c575a9a!2s4%20Highfield%20Street%2C%20Ladera%20Ranch%2C%20London%2C%20UK%20SW1A%201AA!5e0!3m2!1sen!2s!4v1723824435536!5m2!1sen!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}

export default ContactUs;
