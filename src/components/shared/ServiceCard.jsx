"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

function ServiceCard({
  image = "",
  title = "",
  description = "",
  url = "",
  IconVideoSrc = "/videos/0lVW4c3VGL0RIs9Ad5.mp4",
}) {
  return (

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-red-200"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={url}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Read More
          </CardItem>
        </div>
      </CardBody>
      {IconVideoSrc && (
        <video
          src={IconVideoSrc}
          autoPlay
          loop
          muted
          className="absolute top-1/3 left-1/4 mt-2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      )}
    </CardContainer>
  );
}

export default ServiceCard;