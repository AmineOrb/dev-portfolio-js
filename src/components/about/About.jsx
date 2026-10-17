
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Mohamed Amine Elorabi, an MSc Artificial
              Intelligence student at the University of Salford, UK,
              with a BSc (Hons) in Software Engineering. I&apos;m
              passionate about combining AI and software engineering
              to build intelligent, useful applications.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My work spans machine learning, natural language
              processing, deep learning, and full-stack development.
              I&apos;ve built an AI-powered student performance
              prediction system, explored sentiment analysis using
              neural networks, and applied topic modelling to news
              articles about artificial intelligence.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;ve also worked with Apache Spark and Databricks
              on large-scale data analysis and recommendation systems.
              Alongside my AI projects, I have experience developing
              web and mobile applications using technologies such as
              React, Python, Flask, Java, and SQL.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Through freelance development, internships, and
              collaborative university projects, I&apos;ve strengthened
              my problem-solving, communication, and teamwork skills.
              I enjoy learning new technologies, working with others,
              and turning ideas into practical solutions.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m interested in opportunities across artificial
              intelligence, machine learning, data science, and
              software engineering. Whether it&apos;s collaborating
              on an exciting project or exploring a new challenge,
              I&apos;d love to connect!
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>

        <Stats />
      </div>
    </section>
  );
};
