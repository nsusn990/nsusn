"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Event {
  name: string;
  role: string;
  image: string;
}

interface AutoplayCarouselProps {
  items: Event[];
}

const CarouselDemo: React.FC<AutoplayCarouselProps> = ({ items }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    plugin.current.reset();
  };

  return (
    <div className="carousel w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {items.map((member, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div>
                <div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    priority
                    width={250} // 96px = w-24
                    height={250} // 96px = h-24
                    className="rounded-xl w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl lg;text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
