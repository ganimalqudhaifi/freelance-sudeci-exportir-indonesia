"use client";
import Link from "next/link";
import { useState } from "react";
import CustomImage from "./custom-image";

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "FAQ", href: "#faq" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative border-b border-neutral-400 md:border-0 z-50">
      <div className="flex items-center justify-between mx-auto px-4 py-3 md:px-8 md:py-4 lg:px-16 lg:py-5">
        <CustomImage
          src="/logo.png"
          alt="logo"
          width={640}
          height={229}
          className="w-32 md:w-[180px] shrink-0"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "absolute left-0 top-full w-full bg-white shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
              : "hidden opacity-0"
          } md:block md:w-auto md:relative md:opacity-100 md:shadow-none`}
        >
          <ul className="font-medium md:text-lg flex flex-col p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white">
            {navigationLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
