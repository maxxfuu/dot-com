import { FolderCode, PenLine, Sparkles, SquareMousePointer } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-[#252525] text-[#9CA3AF] sticky top-0 bg-black z-50 min-h-[50px] sm:min-h-[60px]">
      {/* Left Nav */}
      <div className="flex items-center px-2 sm:px-4">
        <p className="text-sm sm:text-base font-medium">maxxfuu</p>
      </div>

      {/* Right Nav */}
      <ul className="flex px-2 sm:px-4 space-x-3 sm:space-x-6">
        <li className="flex items-center text-xs sm:text-sm gap-1 sm:gap-2 cursor-pointer hover:text-white transition-colors">
          <SquareMousePointer size={14} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">about</a>
        </li>
        <li className="flex items-center text-xs sm:text-sm gap-1 sm:gap-2 cursor-pointer hover:text-white transition-colors">
          <Sparkles size={14} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">gems</a>
        </li>
        <li className="flex items-center text-xs sm:text-sm gap-1 sm:gap-2 cursor-pointer hover:text-white transition-colors">
          <PenLine size={14} className="sm:w-4 sm:h-4"/>
          <a href="#" className="hidden sm:inline">writing</a>
        </li>
      </ul>
    </div>
  );
}
