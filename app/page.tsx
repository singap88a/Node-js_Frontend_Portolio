import Contact_Us from "@/components/main/Contact_Us";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Contact_Us/>
        <SocialMediaIcons/>
      </div>
    </main>
  );
}
