'use client'
import { useState } from 'react';
import {Typewriter} from 'react-simple-typewriter' 

interface HeroHeaderProps {
  description?: string;
}

export default function HeroHeader({
  description = "Connecting local producers with global buyers through trusted export solutions.",
}: HeroHeaderProps) {
  const [doneTyping, setDoneTyping] = useState(false);

  return (
    <section className="bg-center bg-no-repeat bg-[url('/banner-product.png')] bg-cover bg-gray-500 bg-blend-multiply">
      <div className="px-8 mx-auto max-w-screen-xl text-center py-20 lg:py-36">
        {/* <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
          {title}
        </h1> */}
        <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl'>
          <Typewriter
            words={[
  'Welcome to PT Sudeci Exportir Indonesia',
  'Empowering Trade, Elevating Quality',
  'From Local Excellence to Global Markets',
  'Your Trusted Export Partner from Indonesia',
]}

            loop={1}
            cursor={!doneTyping}
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}onLoopDone={() => setDoneTyping(true)}
          />
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="hidden justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}
