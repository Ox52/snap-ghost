import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import SnapNinjaLogo from './SnapNinjaLogo';

export default function Navbar() {
  return (
    <div className="fixed right-0 left-0 z-50 border-white/10 border-b  bg-stone-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-16">
          <Link href="/" className=" group flex items-center space-x-2">
            <div className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <Image
                src="/snap01.svg"
                alt="SnapNinja Logo"
                width={30}
                height={30}
                priority
              />
            </div>

            <span className="font-bold text-xl tracking-tight">
              snap <span className="text-[#FFFC00]">Ghost</span>
            </span>
          </Link>

          <nav className="flex items-center space-x-8 md:flex">
            <div className="flex items-center space-x-2  rounded-full border border-green-500/10  bg-green-500/10  px-3 py-1 ">
              <div className="h-2 w-2 animate-pulse rounded-full  bg-green-500/10 "></div>

              <div className="font-mono font-semibold tracking-wider text-xs  text-green-400">
                {" "}
                UNDECECTED
              </div>
            </div>
            <Link
              href="/Features"
              className="text-[#FFFC00] hover:text-[#FFFC00] transition-colors font-semibold text-sm"
            >
              Features
            </Link>
            <Link
              href="/Pricing"
              className="text-gray-300 hover:text-[#FFFC00] transition-colors font-semibold text-sm"
            >
              Pricing
            </Link>
            <button
              type="button"
              className=" transform bg-white rounded-full px-5 py-2 text-black  font-bold hover:scale-105 hover:bg-[#FFFC00]"
            >
              Downlaod Now
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
