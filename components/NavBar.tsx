import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NSUSNLogo from "./NSUSN Logo";

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
        <div className="font-bold text-xl"><NSUSNLogo color="#2920D2" size={{
                  width: 110.5,
                  height: 33.7
              }}/></div>
        <div className="flex space-x-4 mt-2">
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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
