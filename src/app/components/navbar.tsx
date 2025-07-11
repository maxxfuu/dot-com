"use client"

import Link from "next/link";
import { File, PenLine, Sparkles, SquareMousePointer } from 'lucide-react';

export default function Navbar() {
  return (
    <div className={`flex justify-between items-center py-4 text-[#9CA3AF] sticky top-0 z-50 transition-all duration-300 ease-out bg-black/80 border-b border-gray-700/30 shadow-lg`}>
      {/* Left Nav */}
      <div className="flex items-center px-4 cursor-pointer">
        <Link href="/" className="text-base sm:text-base font-medium">maxxfuu</Link>
      </div>

      {/* Right Nav */}
      <ul className="flex px-4 space-x-4 sm:space-x-6">
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1">
          <SquareMousePointer size={18} className="sm:w-4 sm:h-4"/>
          <Link href="/" className="hidden sm:inline">home</Link>
        </li>
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1">
          <Sparkles size={18} className="sm:w-4 sm:h-4"/>
          <Link href="/gems" className="hidden sm:inline">gems</Link>
        </li>
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1 cursor-pointer">
          <PenLine size={18} className="sm:w-4 sm:h-4"/>
          <Link href="/writing" className="hidden sm:inline">writing</Link>
        </li>
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1 cursor-pointer">
          <File size={18} className="sm:w-4 sm:h-4"/>
          <a href="/resume.pdf" target="_blank" className="hidden sm:inline">resume</a>
        </li>
      </ul>
    </div>
  );
}
