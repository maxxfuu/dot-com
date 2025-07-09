import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      name: "Project 1", 
      description: "Description of project 1",
      image: "/project-1.png",
      link: "https://project-1.com"
    },
    {
      id: "project-2",
      name: "Project 2", 
      description: "Description of project 2",
      image: "/project-2.png",
      link: "https://project-2.com"
    },
    {
      id: "project-3",
      name: "Project 3", 
      description: "Description of project 3",
      image: "/project-3.png",
      link: "https://project-3.com"
    },
    {
      id: "project-4",
      name: "Project 4", 
      description: "Description of project 4",
      image: "/project-4.png",
      link: "https://project-4.com"
    }
  ]

  return (
    <div className="pt-4 pb-8 px-2 sm:px-4">
      {/* Header section with responsive design */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold">projects</h2>
        <a 
          href="https://github.com/maxxfuu" 
          className="inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">View more on</span>
          <span className="sm:hidden">More on</span>
          GitHub <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      {/* Responsive grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            className="bg-[#151315] p-3 sm:p-4 rounded-lg hover:bg-[#252325] transition-colors group block"
          >
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Image
                priority={true}
                draggable={false}
                src={project.image} 
                alt={project.name} 
                width={2124} 
                height={2124} 
                className="w-full h-24 sm:h-32 object-cover rounded-md"
              />
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}