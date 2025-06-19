import AboutMe from "@/components/main/Aboutme";
import ContactMe from "@/components/main/Contactme";
import Hero from "@/components/main/Hero";
import Highlights from "@/components/main/Highlights";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
       <AboutMe/>
        <Projects/>
        <Highlights/>
        <ContactMe/>
      </div>
    </main>
  );
}
