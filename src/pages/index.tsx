import Head from "next/head";
import Header from "../../components/Header";
import type { GetStaticProps } from "next";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experiences from "../../components/Experiences";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Link from "next/link";
import Image from "next/image";
import temitope from "../../public/temitope.jpeg";
import { Experience, Project, Skill, Socials, pageInfo } from "../../typings.d";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchskills } from "../../utils/fetchskills";
import { fetchExperience } from "../../utils/fetchExperience";
import { fetchsocials } from "../../utils/fetchsocials";
import { fetchProjects } from "../../utils/fetchProjects";

type Props = {
  pageInfo: pageInfo;
  experience: Experience[];
  skill: Skill[];
  project: Project[];
  socials: Socials[];
};

export default function Home({
  pageInfo,
  socials,
  experience,
  skill,
  project,
}: Props) {
  return (
    <section className="bg-[rgb(36,36,36)] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 text-white snap-y snap-mandatory  z-0 h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <Head>
        <title className="">Temitope portfolio</title>
      </Head>
      <Header socials={socials} />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero pageinfo={pageInfo} />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About pageinfo={pageInfo} />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <Experiences experience={experience} />
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
        <Contact pageinfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="w-full sticky bottom-20 sm:bottom-5 cursor-pointer">
          <div className="items-center flex  justify-center">
            <Image
              src={temitope}
              alt="temitope image"
              height={20}
              width={20}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 "
            />
          </div>
        </footer>
      </Link>
    </section>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: pageInfo = await fetchPageInfo();
  const skill: Skill[] = await fetchskills();
  const experience: Experience[] = await fetchExperience();
  const socials: Socials[] = await fetchsocials();
  const project: Project[] = await fetchProjects();
  return {
    props: {
      pageInfo,
      socials,
      experience,
      skill,
      project,
    },
    revalidate: 10,
  };
};
