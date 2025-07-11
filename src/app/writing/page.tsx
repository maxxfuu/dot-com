import { Rss } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";

const blogs = [
  {
    title: "Reflections on two years of CS",
    tags: ["tag1", "tag2", "tag3"],
    description: "chat are we cooked?",
    date: "0000-00-00",
    link: "/"
  },
  {
    title: "Cellular Automata",
    tags: ["tag1", "tag2", "tag3"],
    description: "what the heck is a cellular automata?",
    date: "0000-00-00",
    link: "/"
  }
]

export default function Writing() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 mt-10 px-6">
        <h1 className="inline-flex items-center gap-2 text-lgfont-bold"><Rss className="w-4 h-4"/>writing</h1>
        <p className="text-sm text-gray-400">A collection of my literary attrocities on life and non-tech related topics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 px-6">
        {blogs.map((blog) => (
          
          <a key={blog.title} href={blog.link} >
            <MagicCard className="bg-[#131313] p-3 sm:p-4 rounded-lg hover:bg-[#232323] transition-colors group block cursor-pointer">

            <div className="flex flex-col space-y-2 sm:space-y-3 hover:underline hover:underline-offset-4 hover:decoration-gray-500">
              <h2 className="text-sm font-semibold group-hover:text-white transition-colors items-center">{blog.title}</h2>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{blog.description}</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{blog.date}</p>
            </div>
            </MagicCard>
          </a>
        ))}
      </div>
    </div>

    

  );
}