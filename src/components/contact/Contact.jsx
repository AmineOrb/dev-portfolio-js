import { AiFillMail, AiFillPhone, AiFillEnvironment } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";
import Reveal from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-800 p-8 rounded-xl">
        <div className="space-y-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <AiFillPhone className="text-xl text-indigo-400" />
              <span>+447539495805</span>
            </div>
          </Reveal>
          
          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <AiFillMail className="text-xl text-indigo-400" />
              <span>amineorb03@gmail.com</span>
            </div>
          </Reveal>
          
          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <AiFillEnvironment className="text-xl text-indigo-400" />
              <span>Liverpool, United Kingdom</span>
            </div>
          </Reveal>


          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <SiLinkedin className="text-xl text-indigo-400" />
              <Link 
                href="https://www.linkedin.com/in/mohamed-amine-elorabi-" 
                target="_blank"
                className="hover:text-indigo-300 transition-colors"
              >
                linkedin.com/in/mohamed-amine-elorabi-
              </Link>
            </div>
          </Reveal>

          <Reveal width="w-full">
            <div className="flex items-center gap-3 text-zinc-300">
              <SiGithub className="text-xl text-indigo-400" />
              <Link 
                href="https://github.com/AmineOrb" 
                target="_blank"
                className="hover:text-indigo-300 transition-colors"
              >
                github.com/AmineOrb
              </Link>
            </div>
          </Reveal>

        </div>
        
        <Reveal width="w-full">
          <form action="https://formspree.io/f/meogwrzl" method="POST" className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-700 border border-zinc-600 rounded p-2 text-zinc-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-700 border border-zinc-600 rounded p-2 text-zinc-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-zinc-700 border border-zinc-600 rounded p-2 text-zinc-300 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            
            <div className="text-right">
              <button 
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
