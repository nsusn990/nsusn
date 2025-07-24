import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NSUSNLogo from "./NSUSN Logo";
import Link from "next/link";

const navElem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Reports",
    link: "/reports",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function NavBar() {
  return (
    <div className="px-7 py-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <div className="hidden lg:flex">
            <NSUSNLogo
              color="#2920D2"
              size={{
                width: 110.5,
                height: 33.7,
              }}
            />
          </div>
          <div className="flex lg:hidden">
            <NSUSNLogo
              color="#2920D2"
              size={{
                width: 90,
                height: 25,
              }}
            />
          </div>
        </Link>
        <div className="lg:flex hidden space-x-4 mt-2">
          {navElem.map((item) => (
            <div
              className="hover:font-bold transition-all ease-in hover:text-blue-700"
              key={item.name}
            >
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
