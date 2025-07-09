import { PenLine, Sparkles, SquareMousePointer } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-[#252525] text-[#9CA3AF] sticky top-0 bg-black z-50 min-h-[50px] sm:min-h-[60px]">
      {/* Left Nav */}
      <div className="flex items-center px-4">
        <p className="text-base sm:text-base font-medium">maxxfuu</p>
      </div>

      {/* Right Nav */}
      <ul className="flex px-4 space-x-4 sm:space-x-6">
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1">
          <SquareMousePointer size={18} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">about</a>
        </li>
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1">
          <Sparkles size={18} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">gems</a>
        </li>
        <li className="flex items-center text-sm sm:text-sm gap-2 cursor-pointer hover:text-white transition-colors p-1">
          <PenLine size={18} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">writing</a>
        </li>
      </ul>
    </div>
  );
}
