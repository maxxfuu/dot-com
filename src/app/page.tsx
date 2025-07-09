import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Experience from "./components/experience"
import Projects from "./components/projects"

export default function Home() {
  return (
    <div className="max-w-3xl px-8 mx-auto">
      <Navbar/>
      <Hero/>
      <Experience/>
      <Projects/>
    </div>
  );
}
