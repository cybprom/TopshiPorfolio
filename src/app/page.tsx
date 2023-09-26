import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";
import Image from "next/image";
import temitope from "../../public/temitope.jpeg";
import { client } from "./lib/sanity";
import Cursor from "@/components/Cursor";
import { getPageInfo } from "./lib/fetchpageinfo";
import { getsocials } from "./lib/fetchSocials";
import { getExperience } from "./lib/fetchExperience";
import Experiences from "@/components/Experiences";
import { getskills } from "./lib/fetchskills";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { getprojects } from "./lib/fetchProjects";
import Contact from "@/components/Contact";

type Props = {};

export default async function Home({}: Props) {
  const pageinfo = await getPageInfo();
  const socials = await getsocials();
  const experience = await getExperience();
  const skill = await getskills();
  const project = await getprojects();
  return (
    <section className="bg-[#242424] scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 text-white snap-y snap-mandatory  z-0 h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <Head>
        <title className="">Cybprom portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageinfo={pageinfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageinfo={pageinfo} />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        {/* <Experiences experience={experience} /> */}
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skill={skill} />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects project={project} />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <Contact pageinfo={pageinfo} />
      </section>
      <footer className="w-full sticky bottom-20 sm:bottom-5 cursor-pointer right-2">
        <Cursor />
      </footer>
    </section>
  );
}
export const revalidate = 60;
