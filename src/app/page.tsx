import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Experience from "./components/experience"
import Projects from "./components/projects"

export default function Home() {
  return (
    <div className="w-full sm:max-w-4xl sm:mx-auto md:px-12">
      <Navbar/>
      <Hero/>
      <Experience/>
      <Projects/>
    </div>
  );
}
