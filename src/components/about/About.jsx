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
              ey! I&apos;m Mohamed Amine Elorabi, a software engineering graduate from the University of Salford in the UK. I specialize in a diverse range of technologies including Java, Python, JavaScript, Kotlin, and Swift, with a passion for creating impactful software solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My academic journey has equipped me with strong foundations in programming, database systems, web development, software quality management, and mobile development. I've worked on various collaborative projects, including machine learning applications and mobile development using Android Studio and XCode.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Beyond technical skills, I pride myself on analytical thinking, effective teamwork, and the ability to lead and delegate tasks when needed. I'm highly organized and detail-oriented, consistently meeting project deadlines and quickly adapting to new challenges, driven by my love for discovery and learning.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m currently looking for a role where I can leverage my technical expertise and innovative mindset, contributing to impactful software solutions within a dynamic engineering team. If you think you&apos;ve got an opportunity that matches my skills and aspirations, let&apos;s connect!
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
