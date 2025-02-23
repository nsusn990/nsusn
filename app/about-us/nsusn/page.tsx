import CarouselDemo from "@/components/Carousel";
import Image from "next/image";
import React from "react";

const events = [
  {
    name: "Skill Lab",
    role: "Skill Lab is a six-module training for aspiring entrepreneurs covering ideation, research, MVP, customers, pitch deck, and fundraising.",
    image: "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8DZZeriOT5UXjJsWqzN0LB7EZOiGvHutk9Mmn",
  },
  {
    name: "Ask Us Anything",
    role: "A series of webinars and seminars where the internal NSUSN team and startup experts answer questions from potential entrepreneurs.",
    image: "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe",
  },
  {
    name: "Startups Clinic",
    role: "A daylong on-campus event where young entrepreneurs can get walk-in guidance from the internal NSUSN team and startup experts",
    image: "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq86VbfL708fbKE3gBI9wj1a4PpmnVCGhlNuFyd",
  },
  {
    name: "Connecting Co-Founders",
    role: "Connecting Co-founders lets NSU students and alumni meet aspiring entrepreneurs to find their ideal co-founder.",
    image: "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8wb4GCkUkY85ifSgDVR3BslZcWwp9NCdrM4TP",
  },
  {
    name: "Ask Us Anything",
    role: "A series of webinars and seminars where the internal NSUSN team and startup experts answer questions from potential entrepreneurs.",
    image: "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8R3JIJNepO9hbjdDIRwJnZHx2PGUu35BzYvNe",
  },
];

function NSUSN() {
  return (
    <div>
      <Image
        src={
          "https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8tU8t9R1YilnzN0GIocAyPbKa2fgdHEJMp6Sj"
        }
        alt={""}
        width={1920}
        height={1080}
      />

      <section className="container mx-auto px-6 py-6">
        <h1 className="text-2xl lg:text-6xl pb-4 font-semibold text-[#4365AE]">
          About NSU Startups Next
        </h1>
        <p>
          NSU Startups Next (NSUSN) is an academic incubator at North South
          University that supports aspiring entrepreneurs in building scalable
          businesses. It provides tailored programs, mentorship, investor
          access, and early-stage funding opportunities. Through intensive
          sprints, weekly sessions, investor meetings, and webinars with experts
          from companies. NSUSN helps founders create successful companies.
          Through various programs, NSUSN offers coaching, early idea
          validation, and entrepreneurship training. Since 2020, NSUSN has
          mentored over 150 entrepreneurs, supported 25+ teams, secured USD 1.5M
          in funding, and created 100+ jobs, contributing to Bangladesh&apos;s
          economic growth and the startup ecosystem. <br />
          <br /> NSUSN strives to guide highly impactful and fast-growing
          technology companies that contribute to local and international
          economies and societies. We aspire to partner with world-class
          entrepreneurship ecosystem contributors who can maximize the
          capacities of entrepreneurs who can contribute to regional
          development. <br /> <br /> NSUSN&apos;s mission is to support entrepreneurs
          by providing mentorship, networking, and investment opportunities so
          that they can build sustainable and scalable businesses. We work
          diligently to create a robust entrepreneurial ecosystem for technology
          companies to flourish.
        </p>
      </section>
      <section className="container mx-auto px-6 py-6">
        <h1 className="text-2xl lg:text-6xl pb-4 font-semibold text-[#4365AE]">
          Events
        </h1>
        <div className="py-2">
          <div>
            <div className="w-full">
              <CarouselDemo items={events} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NSUSN;
