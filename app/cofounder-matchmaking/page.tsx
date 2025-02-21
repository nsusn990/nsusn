import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

async function CoFounderMatchMaking() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: matchmaking, error } = await supabase
    .from("matchmaking")
    .select("*");

  return (
    <div className="">
      <section className="py-9 flex flex-col items-center justify-center">
        <div className="w-[60%] py-4 flex flex-col items-center">
          <h1 className="font-bold text-7xl text-center">
            NSUSN Co-Founder Matchmaking
          </h1>
          <p className="pt-5">
            Where savvy founders go to meet potential co‑founders (Ycombinator)
          </p>
        </div>
        <div className="py-10 px-6">
          <div>
            <div className="grid grid-cols-3 py-4 w-full gap-3">
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
      </section>

      {/* This is the section where the co-founder matching will be displayed */}
      <section className="bg-gray-200 p-6 rounded-xl">
        <div>
          <h1 className="text-4xl px-8 font-bold my-8">
            World-class founders are on co-founder matching
          </h1>
        </div>
        <div className="w-full gap-4 px-8 grid grid-cols-3">
          {matchmaking &&
            matchmaking.map((match) => (
              <div
                key={match.id}
                className="w-full px-6 bg-white rounded-xl flex flex-col gap-5 py-6"
              >
                <p className="h-16">{match.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full object-cover w-12 h-12"
                      src={match.imagelink}
                      alt={match.name}
                      width={48}
                      height={48}
                    />
                    <div className="flex flex-col">
                      <h1 className="text-xl font-semibold">{match.name}</h1>
                      <p className="text-xs">{match.companyName}</p>
                    </div>
                  </div>
                  <h1 className="bg-[#4464AD] text-white px-3 rounded-xl py-2">
                    {match.tag}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default CoFounderMatchMaking;
