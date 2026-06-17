import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { AvailableFor } from "@/components/sections/AvailableFor";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <WhatIDo />
      <CaseStudies />
      <Skills />
      <Services />
      <Experience />
      <About />
      <AvailableFor />
      <Contact />
    </>
  );
}
