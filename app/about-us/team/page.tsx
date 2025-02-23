"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/team/jane.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/team/mike.jpg",
  },
  {
    name: "Emily Davis",
    role: "Designer",
    image: "/team/emily.jpg",
  },
  {
    name: "Chris Brown",
    role: "Marketing Head",
    image: "/team/chris.jpg",
  },
];

export default function Page() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    plugin.current.reset();
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="p-2">
              <Card className="">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96} // 96px (same as w-24 in Tailwind)
                    height={96} // 96px (same as h-24 in Tailwind)
                    className="rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
