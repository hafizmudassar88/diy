import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    username: "Olivia G.",
    comment:
      "I totally recommend these guys because of their work ethic and premium services. The team is so polite and knowledgeable.",
  },
  {
    username: "John Lark",
    comment:
      "I have been using Benedetto Auto Detail for a year now. I am quite impressed by their work and professionalism of the team.",
  },
  {
    username: "Jennifer L.",
    comment:
      "Benedetto Auto Detail is the best auto detailing service provider in Orange County California. I am totally in love with the result.",
  },
  {
    username: "Bob Brown",
    comment: "A great experience overall. Will definitely come again.",
  },
];

export function TestimonialCarousel() {
  return (
    <div className="w-full h-full px-6 md:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="flex"
      >
        <CarouselContent className="flex space-x-2">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-none w-full md:w-1/3 cursor-grab select-none "
            >
              <div className="p-4 h-full">
                <Card className="bg-red-600 text-white rounded-3xl h-full flex flex-col">
                  <CardContent className="flex flex-col items-center justify-center p-6 py-12 flex-1 ">
                    <p className="text-lg italic mb-4 text-center">
                      {testimonial.comment}
                    </p>
                    <span className="text-xl font-semibold">
                      - {testimonial.username}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-red-500 text-white border-0 hover:bg-red-600 hover:text-white" />
        <CarouselNext className="bg-red-500 text-white border-0 hover:bg-red-600 hover:text-white" />
      </Carousel>
    </div>
  );
}
