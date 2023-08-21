import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Link from "next/link";
import Image from "next/image";
import temitope from "../../public/temitope.jpeg";

export default function Home() {
  return (
    <section className="bg-[rgb(36,36,36)] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 text-white snap-y snap-mandatory  z-0 h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <Head>
        <title className="">Temitope portfolio</title>
      </Head>
      <Header />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <Contact />
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
