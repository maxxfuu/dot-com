"use client"

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
    description: "I built an additional feature within AWS cloud infrastructure for the company that enabled a full lifecycle of uploading and managing files within the cloud infrastrucutre. Cloud services that was used includes but not limited to AppSync, S3, Lambda, RDS, and other itermediate AWS services. I was also responsible for building a new landing page for the company using Next.js, Tailwind CSS, and TypeScript.",
    date: "Summer 2025"
  },
  {
    id: "item-2",
    image: "/algoverse.png",
    company: "Algoverse Org.",
    position: "Independent Researcher",
    description: "Conducted research on mechanistic interpretability of LLMs by identifying hidden-state task vectors that drive sycophantic behaviors. Mitigating unwatned behavior via vector subtraction during generation.",
    date: "Winter 2024"
  },
  {
    id: "item-3", 
    image: "/ucmerced.png",
    company: "University of California, Merced",
    position: "EE021 Teaching Assistant",
    description: "I facilated lectures and helped 150 students with Python, R, MIPs Assembly. I hosted office hours and mini-workshops; lectured over 65+ hours in 15 weeks addressed questions related to circuit design and programming.",
    date: "Fall 2024"
  },
  {
    id: "item-4",
    image: "/ucmerced.png",
    company: "University of California, Merced",
    position: "Undergraduate Researcher",
    description: "Conducted research on the application of LLM-based grader. Research led to the development of a personalized grading system that allows subjective grading on open-ended summative assessments. This project was trained on real student data and the model with fine-tuned using LoRA.",
    date: "Fall 2023"
  },
  {
    id: "item-5",
    image: "/acm.png",
    company: "University of California, Merced",
    position: "SIG AI Lead",
    description: "Taught technical workshops on Deep Learning and Machine Learning to 50+ students out of 200 active members. Workshop topics includes Classical ML and Deep Dive into Transformers.",
    date: "Fall 2023"
  }
  
];

export default function Experience() {
  return (
    <div className="py-4 px-2 sm:px-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">experience</h2>
      
      <Accordion type="multiple" className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id}>
            <AccordionTrigger className="text-left w-full">
              <div className="flex items-center justify-between w-full pr-2 sm:pr-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <Image src={exp.image} alt={exp.company} width={35} height={35} className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <h3 className="font-medium text-sm sm:text-base truncate w-full">{exp.company}</h3>
                    <div className="flex items-center text-xs sm:text-sm text-[#9CA3AF]">
                      <span className="truncate">{exp.position}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-[#9CA3AF] flex-shrink-0 ml-2">
                  <span className="hidden sm:inline">{exp.date}</span>
                  <span className="sm:hidden">{exp.date.split(' ')[1] || exp.date}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4 px-2 sm:px-0">
                <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
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