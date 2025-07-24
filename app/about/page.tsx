import NSUSNLogo from "@/components/NSUSN Logo";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { aboutObjectives, aboutProgramStructure, partners } from "./data";

function About() {
  return (
    <div>
      <section className="w-full flex flex-col p-10 items-center justify-center">
        <NSUSNLogo size={{ width: 600, height: 120 }} color="#2920D2" />
        <div className=" text-center mt-4 p-12 pb-6">
          NSU Startups Next (NSUSN) is the official startup incubation platform
          of North South University, Bangladesh’s leading private academic
          institution. Launched in 2020, NSUSN is committed to nurturing student
          and alumni entrepreneurs by providing a structured support system that
          bridges the gap between ideation and investment. The platform plays a
          pivotal role in translating innovative ideas into sustainable,
          scalable, and socially impactful ventures.
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="w-[85%] p-12 pb-6">
          <h1 className="text-4xl text-center font-bold mb-3">Objectives</h1>
          <div className="grid grid-cols-2 item-center justify-end gap-4">
            {aboutObjectives.map((item, index) => (
              <div key={index} className="flex item-center p-5 gap-4 w-[85%]">
                <div className="text-2xl">{item.icons}</div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="w-[85%] p-12">
          <h1 className="text-4xl text-center font-bold mb-3">
            Program Structure
          </h1>
          <p className="text-center">
            NSUSN’s incubation model operates across three integrated tracks
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {aboutProgramStructure.map((item, index) => (
              <Card key={index} className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            In addition to these, NSUSN actively runs Startup Clinics, Skill
            Labs, and Ask Us Anything sessions to engage with aspiring founders
            and foster a culture of entrepreneurship across campuses.
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="w-[85%] p-12 pb-6">
          <h1 className="text-4xl text-center font-bold mb-3">
            Strategic Partnerships
          </h1>
          <div className="text-center">
            NSUSN has built alliances with global startup enablers including IBM
            for Startups, Microsoft, Zendesk, GitHub, Notion, and MongoDB. It
            also collaborates with national stakeholders like the iDEA Project,
            Startup Bangladesh, BHTPA, and the SAJIDA Foundation, and regularly
            engages with top founders, investors, and mentors from local and
            international ecosystems.
          </div>
          <div className="flex flex-wrap w-full items-center justify-between gap-4 mt-8">
            {partners.map((partner, index) => (
              <img
                key={index}
                className="h-14 items-center flex"
                src={partner.logo}
                alt={partner.name}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-16">
        <div className="text-center">
          NSU Startups Next stands as a model university-based incubator that
          integrates academic excellence with real-world entrepreneurship. By
          fostering innovation, skill development, and economic empowerment,
          NSUSN continues to play a key role in shaping Bangladesh’s future
          startup leaders.
        </div>
      </section>
    </div>
  );
}

export default About;
