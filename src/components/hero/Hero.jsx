import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";
const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
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
                I'm a{" "}
                <span className="font-semibold text-indigo-500">
                  Software Engineer
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
                I'm a motivated and fast-learning software engineering graduate with hands-on
                experience in Java, Python, and JavaScript. I have a proven track record of collaborative
                projects, including machine learning, mobile development, and software quality
                management. Let's connect!
              </p>
            </Reveal>
            <Reveal>
              <OutlineButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
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
