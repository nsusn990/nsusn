"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-3 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            priority
            className=""
            src="https://mxgqqsaqzf.ufs.sh/f/OZf1u5pmfTq8sINh29L1pBe5vwbUrl6OsTy27tFmMYHXgSGR"
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {/* Clickable Dropdown for "About Us" */}
          <li className="relative">
            <button
              className="hover:text-[#4464AD] focus:outline-none flex"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              About Us{" "}
              {dropdownOpen ? (
                <ChevronUp className="text-[10px] font-light" />
              ) : (
                <ChevronDown />
              )}
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="/about-us/nsusn"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      NSUSN
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us/portfolio"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us/team"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Team
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <a href="/cofounder-matchmaking" className="hover:text-[#4464AD]">
              Find a Co-Founder
            </a>
          </li>
          <li>
            <a href="/share-your-story" className="hover:text-[#4464AD]">
              Share Your Story
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-[#4464AD]">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <div></div> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden p-6`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="space-y-6 mt-8">
          {/* Mobile Dropdown for "About Us" */}
          <li>
            <button
              className="flex items-center justify-between w-full text-left hover:text-[#4464AD]"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              About Us{" "}
              {dropdownOpen ? (
                <ChevronUp className="text-[10px] font-light" />
              ) : (
                <ChevronDown />
              )}
            </button>
            {dropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <a
                    href="/about-us/nsusn"
                    className="block hover:text-[#4464AD]"
                  >
                    NSUSN
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/portfolio"
                    className="block hover:text-[#4464AD]"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/team"
                    className="block hover:text-[#4464AD]"
                  >
                    Team
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/cofounder-matchmaking" className="hover:text-[#4464AD]">
              Find a Co-Founder
            </a>
          </li>
          <li>
            <a href="/share-your-story" className="hover:text-[#4464AD]">
              Share Your Story
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-[#4464AD]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
