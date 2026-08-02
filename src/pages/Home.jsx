import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Toolbox from "../components/sections/Toolbox";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Toolbox />
      <Contact />
    </main>
  );
}
