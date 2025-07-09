import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const experiences = [
  {
    id: "item-1",
    image: "/machyna.png",
    company: "Machyna Inc.",
    position: "Software Engineer Intern",
    description: "Built responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and improve user experience. Gained experience with modern development workflows and version control.",
    date: "Summer 2025"
  },
  {
    id: "item-2",
    image: "/algoverse.png",
    company: "Algoverse Org.",
    position: "Independent Researcher",
    description: "Research on Mechanistic Interpretability of LLMs; Mitigating sycophancy behavior.",
    date: "Spring 2025"
  },
  {
    id: "item-3", 
    image: "/ucmerced.png",
    company: "University of California, Merced",
    position: "Teaching Assistant",
    description: "Assist students with programming concepts in Python, Java, and C++. Help debug code and explain complex algorithms. Improved communication skills while teaching data structures and object-oriented programming.",
    date: "Winter 2024"
  },

  {
    id: "item-4",
    image: "/ucmerced.png",
    company: "University of California, Merced",
    position: "Undergraduate Researcher",
    description: "Developed multiple SaaS applications from concept to deployment. Built responsive frontends, RESTful APIs, and managed databases. Focused on creating innovative solutions for real-world problems.",
    date: "Fall 2023"
  }
];

export default function Experience() {
  return (
    <div className="py-4 px-4">
      <h2 className="text-lg font-semibold mb-4">experience</h2>
      
      <Accordion type="multiple" className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id}>
            <AccordionTrigger className="text-left w-full">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-4">
                  <Image src={exp.image} alt={exp.company} width={35} height={35} />
                  <div className="flex flex-col items-start">
                    <h3 className="font-medium">{exp.company}</h3>
                    <div className="flex items-center text-sm text-[#9CA3AF]">
                      <span>{exp.position}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#9CA3AF]">
                  <span>{exp.date}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 mt-4">
                <p className="text-[#9CA3AF] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}