import React from "react";
import Image from "next/image";
import { getData } from "../api/dataAritable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function CoFounderMatchMaking() {
  const matchmaking = await getData();

  return (
    <div className="">
      <section className="py-9 flex flex-col items-center justify-center">
        <div className="w-[90%] lg:w-[60%] lg:py-4 flex flex-col items-center">
          <h1 className="font-bold text-5xl lg:text-7xl text-center">
            Co-Founder Matchmaking
          </h1>
          <p className="pt-5 text-center">
            Where savvy founders go to meet potential co‑founders (Ycombinator)
          </p>
        </div>
        <div className="py-10 px-4 lg:px-6">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-4 w-full gap-3">
              {[
                {
                  title: "Good for all stages",
                  desc: "Whether you're getting to know people for the future, or ready to go now.",
                },
                {
                  title: "Come with or without an idea",
                  desc: "Don't have the right idea yet? This is a great place to find it.",
                },
                {
                  title: "Explore on your own terms",
                  desc: "No commitment, no equity, no strings attached.",
                },
              ].map((item, index) => (
                <div key={index} className="flex w-full gap-4">
                  <div className="bg-[#932EFA] w-2"></div>
                  <div>
                    <h1 className="text-2xl tracking-tight font-bold">
                      {item.title}
                    </h1>
                    <h1 className="tracking-tight leading-[19px]">
                      {item.desc}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Button variant={"red"} className="text-white" asChild>
            <Link href="/cofounder-matchmaking/register">Register and Find your Co-Founder</Link>
          </Button>
        </div>
      </section>

      {/* This is the section where the co-founder matching will be displayed */}
      <section className="bg-gray-200 pb-6 p-1 lg:p-6 rounded-xl">
        <div>
          <h1 className="text-2xl lg:text-4xl px-8 font-bold my-8">
            World-class founders are on co-founder matching
          </h1>
        </div>
        <div className="w-full gap-4 px-8 grid grid-cols-1 lg:grid-cols-3">
          {matchmaking.map((match) => (
            <div
              key={match.id}
              className="w-full px-6 justify-between bg-white rounded-xl flex flex-col gap-5 py-6"
            >
              <p className="">{match.fields.description}</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full object-cover auto"
                    src={match.fields.imagelink}
                    alt={match.fields.name}
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">
                      {match.fields.name}
                    </h1>
                    <p className="text-xs">{match.fields.companyName}</p>
                  </div>
                </div>
                <Button asChild className="bg-[#4464AD] text-white px-3 rounded-xl py-2">
                  <Link href={match.fields.linkedin}>LinkedIn</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {matchmaking && matchmaking.length > 6 && (
          <h1>See More</h1>
        )}
      </section>
    </div>
  );
}

export default CoFounderMatchMaking;
