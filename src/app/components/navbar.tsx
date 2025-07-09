import { FolderCode, PenLine, Sparkles, SquareMousePointer } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 border-b-1 border-[#252525] text-[#9CA3AF] sticky top-0 bg-black z-50 min-h-[60px]">
      {/* Left Nav */}
      <div className="flex items-center ml-4">
        <p>maxxfuu</p>
      </div>

      {/* Right Nav */}
      <ul className="flex mr-4 space-x-6">
        <li className="flex items-center text-sm gap-2 cursor-pointer"><SquareMousePointer size={16}/><a href="#">about</a></li>
        <li className="flex items-center text-sm gap-2 cursor-pointer"><Sparkles size={16}/><a href="#">experience</a></li>
        <li className="flex items-center text-sm gap-2 cursor-pointer"><FolderCode size={16}/><a href="#">projects</a></li>
        <li className="flex items-center text-sm gap-2 cursor-pointer"><PenLine size={16}/><a href="#">writing</a></li>
      </ul>
    </div>
  );
}
