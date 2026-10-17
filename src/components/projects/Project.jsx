
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

  // Only display links when they are provided.
  const hasCode = Boolean(code);
  const hasLiveDemo =
    Boolean(projectLink) && projectLink !== code;

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`Preview of the ${title} project`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all rounded object-cover shadow-md"
          />
        </div>

        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-3 w-full">
              <h4 className="font-bold text-lg min-w-0">
                {title}
              </h4>

              <div className="flex-1 h-[1px] bg-zinc-600" />

              {hasCode && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code`}
                  title="View source code"
                >
                  <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
                </a>
              )}

              {hasLiveDemo && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} live website`}
                  title="Visit live website"
                >
                  <AiOutlineLink className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2 text-sm text-indigo-300 my-3">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <button
                type="button"
                className="inline-block text-sm text-indigo-300 hover:text-indigo-200"
                onClick={() => setIsOpen(true)}
              >
                Learn more &gt;
              </button>
            </p>
          </Reveal>
        </div>
      </motion.div>

      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
