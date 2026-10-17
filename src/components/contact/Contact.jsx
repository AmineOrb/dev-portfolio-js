
import {
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Reveal from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact" dir="l" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-800 p-6 md:p-8 rounded-xl">
        <div className="space-y-6">
          <Reveal width="w-full">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                Let's work together.
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                I'm open to opportunities in artificial intelligence,
                machine learning, data science, and software
                engineering. Whether you have a project, an
                opportunity, or simply want to connect, I'd love
                to hear from you.
              </p>
            </div>
          </Reveal>

          <Reveal width="w-full">
            <a
              href="tel:+447539495805"
              className="flex items-center gap-3 text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <AiFillPhone className="text-xl text-indigo-400 shrink-0" />
              <span>+44 7539 495805</span>
            </a>
          </Reveal>

          <Reveal width="w-full">
            <a
              href="mailto:amineorb03@gmail.com"
              className="flex items-center gap-3 text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <AiFillMail className="text-xl text-indigo-400 shrink-0" />
              <span className="break-all">amineorb03@gmail.com</span>
            </a>
          </Reveal>

          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <AiFillEnvironment className="text-xl text-indigo-400 shrink-0" />
              <span>United Kingdom</span>
            </div>
          </Reveal>

          <Reveal width="w-full">
            <a
              href="https://www.linkedin.com/in/mohamed-amine-elorabi-57299320b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <SiLinkedin className="text-xl text-indigo-400 shrink-0" />
              <span>LinkedIn Profile</span>
            </a>
          </Reveal>

          <Reveal width="w-full">
            <a
              href="https://github.com/AmineOrb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <SiGithub className="text-xl text-indigo-400 shrink-0" />
              <span>GitHub Profile</span>
            </a>
          </Reveal>
        </div>

        <Reveal width="w-full">
          <form
            action="https://formspree.io/f/meogwrzl"
            method="POST"
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-zinc-100">
              Send me a message
            </h3>

            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-zinc-300 mb-2"
              >
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-zinc-300 mb-2"
              >
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-zinc-300 mb-2"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>

            <p className="text-xs text-zinc-400">
              This form is powered by Formspree.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
