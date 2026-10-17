
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  // Only show links that point to actual project resources.
  const githubProfile = "https://github.com/AmineOrb";

  const isValidProjectLink = (url) =>
    typeof url === "string" &&
    url.trim() !== "" &&
    url.replace(/\/$/, "") !== githubProfile;

  const hasCode = isValidProjectLink(code);

  const hasLiveProject =
    isValidProjectLink(projectLink) &&
    projectLink !== code;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const portalRoot = document.getElementById("root");

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/70 backdrop-blur-sm overflow-y-auto flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Close project details"
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] text-2xl text-white hover:text-indigo-400 transition-colors"
      >
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} project details`}
        className="w-full max-w-2xl h-fit rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl cursor-auto"
      >
        <img
          className="w-full max-h-80 object-cover"
          src={imgSrc}
          alt={`Preview of the ${title} project`}
        />

        <div className="p-6 md:p-8">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-100">
            {title}
          </h4>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 rounded-md px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
            {modalContent}
          </div>

          {(hasCode || hasLiveProject) && (
            <div className="border-t border-zinc-700 pt-5">
              <p className="font-bold mb-4 text-xl text-zinc-100">
                Project Links
                <span className="text-indigo-500">.</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                {hasCode && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
                  >
                    <AiFillGithub className="text-lg" />
                    Source Code
                  </a>
                )}

                {hasLiveProject && (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
                  >
                    <AiOutlineExport className="text-lg" />
                    Live Website
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>,
    portalRoot
  );
};
