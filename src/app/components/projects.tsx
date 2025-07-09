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
    <div className="pt-4 pb-4 px-4">
      <div className="text-sm flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">projects</h2>
        <a href="https://github.com/maxxfuu" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          View more on GitHub <ChevronRight />
        </a>
      </div>
      
      {/* Grid container for all project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors group block"
          >
            <div className="flex flex-col space-y-3">
              <Image 
                src={project.image} 
                alt={project.name} 
                width={200} 
                height={120} 
                className="w-full h-32 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
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