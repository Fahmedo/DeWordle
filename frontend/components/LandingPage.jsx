"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [{ name: "How to play", href: "#" }];

const LandingPage = () => {
  return (
    <div className="w-full h-full relative px-4 pb-2  sm:px-10 xl:px-20">
      <header
        className={`fixed inset-x-0 top-0 z-50 py-2 lg:py-4 sm:px-10 xl:px-20 bg-white transition-shadow `}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex lg:flex-1 gap-16 items-center">
            <Link href="#" className="mt-1">
              <Image
                src="/icon.svg"
                alt="DEW-RDLE"
                width={150}
                height={45}
                priority
              />
            </Link>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-accent-foreground font-normal text-[20px] leading-[28px] "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              aria-label="Open menu"
            >
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-7 items-center lg:justify-end">
            <Link
              href="/signup"
              className="text-[#3a3a3a] hover:text-accent-foreground font-normal text-[20px] leading-[28px]"
            >
              Sign Up
            </Link>

            <Link
              href="/"
              className="bg-[#29296E] leading-[26px]  text-white hover:bg-opacity-90 inline-flex items-center justify-center rounded-3xl px-4 py-2 text-base font-semibold"
            >
              Request Demo
            </Link>
          </div>
        </nav>
      </header>

      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="mx-auto justify-between lg:flex gap-10 xl:gap-24 mt-8 ">
          <div className="lg:mx-0 pt-8 sm:pt-10 lg:pb-1 xl:max-w-[548px] ">
            <h1 className="mt-10 lg:mt-32 text-3xl text-[#29296E] font-roboto sm:pr-20 break-words lg:pr-0 sm:text-5xl font-semibold sm:leading-[58px] lg:leading-[70px] tracking-[1.2px]">
              Get 6 Chances to guess a 5-letter word.
            </h1>
            <p className="mt-6 text-lg text-black sm:text-[24px] font-normal break-words leading-[40px] w-full">
              Think fast, you have 6 chances to guess the right 5-letter word.
              Test your skills and challenge yourself with every round.
            </p>
            <div className="lg:mt-16 mt-8 flex items-center gap-5">
              <Link
                href="/signin"
                className="border hover:bg-accent border-[#29296E] font-bold text-[#29296E]  inline-flex items-center justify-center rounded-3xl w-[12rem]  px-4 py-2 text-lg "
              >
                Log In
              </Link>
              <Link
                href="/game"
                className="bg-[#29296E] text-lg font-bold text-white hover:bg-opacity-90 inline-flex items-center justify-center rounded-3xl w-[12rem] px-4 py-2 "
              >
                Play as Guest
              </Link>
            </div>
          </div>
          <div className="relative w-full h-auto min-h-[400px] lg:min-h-[630px] flex items-center justify-center">
            <div className="relative w-full h-full aspect-square max-w-[630px] max-h-[630px]">
              <Image
                src="/landingpageImg.svg"
                alt="Word game illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
