
import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-zinc-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 pointer-events-none relative z-10">
          <div>
            <Reveal>
              <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
                Hi, I'm Amine<span className="text-indigo-500">.</span>
              </h1>
            </Reveal>

            <Reveal>
              <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
                I'm an{" "}
                <span className="font-semibold text-indigo-500">
                  AI & Software Engineer
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
                I'm an MSc Artificial Intelligence student at the University
                of Salford, with a BSc (Hons) in Software Engineering.
                I build intelligent, practical applications using machine
                learning, natural language processing, and full-stack
                development.
              </p>
            </Reveal>

            <Reveal>
              <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-400 md:text-base mt-4">
                From predictive machine learning models and NLP projects to
                web applications and data-driven systems, I enjoy turning
                complex problems into useful solutions. I'm always excited
                to collaborate, learn, and build something meaningful.
              </p>
            </Reveal>

            <Reveal>
              <OutlineButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6"
              >
                Contact Me
              </OutlineButton>
            </Reveal>
          </div>

          <div className="flex justify-center items-center">
            <Reveal>
              <div className="pointer-events-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                <img
                  src="/profile-img/amine-profile.jpg"
                  alt="Amine Elorabi"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
