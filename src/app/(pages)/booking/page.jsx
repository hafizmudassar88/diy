"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  addServiceToFirebase,
  getAllServices,
} from "@/services/firebaseService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { HeroSection } from "@/components/shared";

function Booking() {
  const [allServices, setAllServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }

    const name = data.name;
    const email = data.email;
    const selectedDate = new Date(data.date);
    const selectedTime = new Date(data.time);

    // Combine date and time into a single timestamp
    const combinedTimestamp = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      selectedTime.getHours(),
      selectedTime.getMinutes(),
      selectedTime.getSeconds()
    ).toISOString(); // Convert to ISO 8601 format

    const services = selectedServices.map((service) => service.id);

    const newOrder = {
      displayName: name,
      emailID: email,
      services: services,
      timeStamp: combinedTimestamp,
    };

    const res = await addServiceToFirebase(newOrder);

    if (res) {
      const services = selectedServices.map((service) => ({
        id: service.id,
        title: service.title,
        price: service.price,
      }));
      const servicesString = JSON.stringify(services);
      const encodedServicesString = encodeURIComponent(servicesString);
      const url = `/make-payment?data=${encodedServicesString}`;
      router.push(url);
    } else {
      toast.error("Error adding order, please try again");
    }

    // Clear the form fields after submission
    reset();
  };

  const fetchServices = async () => {
    const services = await getAllServices();
    setAllServices(services);
  };

  const handleServiceChange = (selectedService) => {
    setSelectedServices((prevServices) => [...prevServices, selectedService]);
  };

  useEffect(() => {
    toast.success(
      <div className="flex justify-between items-center bg-black text-white p-4 w-full">
        <p className="text-justify">
          <span className="font-bold text-red-500">Note: </span>Please use the
          same email for booking that you want to use to view your booking
          history on the mobile app.
        </p>
        <button onClick={() => toast.dismiss()} className="ml-4">
          <RxCross2 className="h-5 w-5 text-gray-500" />
        </button>
      </div>,
      {
        duration: Infinity, // Make the toast stay indefinitely until dismissed
        icon: null, // Remove the default success icon
        position: "bottom-right", // Set the toast location to bottom right
        style: {
          padding: 0, // Remove padding from the toast container
          margin: 0, // Remove margin from the toast container
          background: "black", // Ensure the background is black
        },
      }
    );

    fetchServices();
  }, []);

  return (
    <div className="bg-white pb-2 overflow-x-hidden">
      {/* hero section  */}
      <HeroSection
        bgImage={"/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg"}
        title={"Booking"}
        subtitle={"Booking"}
      />

      <div className="bg-white text-black flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
          Book Now
        </span>

        <p
          data-aos="fade-up"
          className="mt-2 text-md text-opacity-85 font_barlow text-center md:w-[35%]"
        >
          Our team is dedicated to providing you with exceptional customer
          service and a pristine car.
        </p>
      </div>

      {/* book now  */}
      <div className="min-h-[70vh] rounded-3xl grid grid-cols-1 md:grid-cols-[1fr_1fr] m-5 md:m-20 bg-white ">
        {/* left side  */}
        <div className=" text-black shadow-xl rounded-3xl p-10 bg-[#f4f4f4]" data-aos="fade-right">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">Name is required</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">Email is required</p>
              )}
            </div>

            {/* Date Field using react-datetime */}
            <div className="mb-4 bg-inherit text-black ">
              <label
                htmlFor="date"
                className="block text-sm font-medium  text-gray-700"
              >
                Date
              </label>
              <Datetime
                id="date"
                {...register("date", { required: true })}
                onChange={(date) => setValue("date", date)}
                className={`mt-1 bg-white block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
                  errors.date ? "border-red-500" : ""
                }`}
                inputProps={{
                  className:
                    "bg-white text-black w-full px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500",
                }}
                timeFormat={false} // Optional: Disable time selection if you want only date
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">Date is required</p>
              )}
            </div>

            {/* Time Field using react-datetime */}
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <Datetime
                id="time"
                {...register("time", { required: true })}
                onChange={(time) => setValue("time", time)}
                className={`mt-1 bg-white block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
                  errors.time ? "border-red-500" : ""
                }`}
                inputProps={{
                  className:
                    "bg-white text-black w-full px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500",
                }}
                dateFormat={false} // Optional: Disable date selection if you want only time
              />
              {errors.time && (
                <p className="text-red-500 text-xs mt-1">Time is required</p>
              )}
            </div>

            <div className="mb-4 ">
              <label
                htmlFor="services"
                className="block text-sm font-medium text-gray-700"
              >
                Services
              </label>

              <div className="">
                {allServices.map((service) => (
                  <div
                    className="form-control"
                    key={service.id}
                    onClick={() => handleServiceChange(service)}
                  >
                    <label className="cursor-pointer label">
                      <span className="label-text text-black">
                        {service.title} - ${service.price}
                      </span>
                      <input
                        type="checkbox"
                        // defaultChecked
                        className="checkbox checkbox-error"
                      />
                    </label>
                  </div>
                ))}
              </div>

              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  Please select a service
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-4 mt-10 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* right side  */}
        <div className="w-full hidden md:block" data-aos="fade-left">
          {/* <img
            src="/images/ceramic-coating-for-cars.jpg"
            alt=""
            className="w-full h-full rounded-3xl"
          /> */}
          <video
            src="/videos/Hand showing Auto App.mp4" // Replace with the path to your video file
            className="w-full h-full rounded-3xl"
            autoPlay
            loop
            muted
            playsInline // Ensures the video plays on mobile without needing user interaction
            controls={false} // Set to true if you want to display video controls
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
