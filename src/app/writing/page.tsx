import { Link, Rss } from "lucide-react";

const blogs = [
  {
    title: "Blog 1",
    tags: ["tag1", "tag2", "tag3"],
    description: "This is a description of blog 1",
    date: "2025-01-01",
    link: "/"
  }
]

export default function Writing() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 mt-10">
        <h1 className="inline-flex items-center gap-2 text-lgfont-bold"><Rss className="w-4 h-4"/>writing</h1>
        <p className="text-sm text-gray-400">A collection of my literary attrocities on life and non-tech related topics.</p>
      </div>

      <h2 className="flex justify-center items-center text-sm text-gray-400 mt-30">
        Oops, nothing here yet, come back later! 👋
      </h2>
    </div>

  );
}